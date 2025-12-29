import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, HelpCircle, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ChatInterface = ({ onClose, initialMessage }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to MHK Tech. I am your automated assistant. How may I direct your inquiry regarding our enterprise services?'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  const faqs = [
    "What industries do you serve?",
    "How does your AI implementation process work?",
    "Do you offer ongoing support contracts?",
    "What are your security compliance standards?"
  ];

  useEffect(() => {
    if (initialMessage) {
      handleSendMessage(initialMessage);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (message = input) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I have logged your request. Our system is currently in demonstration mode. Please use the contact form for formal inquiries.'
      }]);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white/95 backdrop-blur-xl z-50 flex overflow-hidden"
    >
      {/* Sidebar - FAQs */}
      <div className="hidden md:flex w-80 bg-slate-50 border-r border-slate-200 flex-col p-6">
        <div className="mb-8">
           <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
             <HelpCircle className="w-5 h-5 text-emerald-600" />
             Common Inquiries
           </h3>
           <p className="text-slate-500 text-sm">Select a topic to start</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.button
              key={idx}
              whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 1)' }}
              onClick={() => handleSendMessage(faq)}
              className="w-full text-left p-3 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all text-sm group flex items-center justify-between shadow-sm"
            >
              {faq}
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
            </motion.button>
          ))}
        </div>
        <div className="mt-auto pt-6 border-t border-slate-200">
           <p className="text-xs text-slate-500 leading-relaxed">
             MHK Tech AI Assistant v2.4<br/>
             Enterprise Security protocols active.
           </p>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Header */}
        <div className="bg-white/80 border-b border-slate-200 px-6 py-4 flex items-center justify-between backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm">
              <Bot className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 block">MHK Executive Assistant</span>
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                 <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Online</p>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-slate-900"
            aria-label="Close chat"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 custom-scrollbar bg-slate-50/50">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <Bot className="w-4 h-4 text-emerald-600" />
                  </div>
                )}
                <div
                  className={`max-w-2xl px-6 py-4 rounded-lg shadow-sm border ${
                    message.role === 'user'
                      ? 'bg-emerald-600 border-emerald-500 text-white rounded-tr-none'
                      : 'bg-white border-slate-200 text-slate-700 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded bg-slate-200 border border-slate-300 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-slate-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="bg-white border-t border-slate-200 p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-4 max-w-4xl mx-auto"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your inquiry securely..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-inner"
                aria-label="Message input"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold shadow-lg shadow-emerald-900/10 transition-all flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Send</span>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatInterface;