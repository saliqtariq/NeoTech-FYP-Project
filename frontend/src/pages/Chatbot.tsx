"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Bot, X, Send } from "lucide-react"
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: "bot", text: "👋 Hi! Welcome to Neotech Solutions. How can I help you achieve your career goals today?" }])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Ensure your API key is set in your .env file as VITE_GEMINI_API_KEY
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // Simple rule-based logic for presentation
      setTimeout(() => {
        const lowerInput = input.toLowerCase();
        let botReply = "Thank you for reaching out! Our agents are currently busy, but you can explore our trending courses or contact us at info@neotechsolution.com for direct assistance.";

        if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
          botReply = "Yes, what can I help you with today?";
        } else if (lowerInput.includes("course") || lowerInput.includes("learn") || lowerInput.includes("enroll") || lowerInput.includes("outline")) {
          botReply = "You can visit our Courses page to find detailed outlines, durations, and enrollment options for all our programs!";
        }

        setMessages((prev) => [
          ...prev, 
          { role: "bot", text: botReply }
        ]);
        setLoading(false);
        setInput("");
      }, 1000);
      
    } catch (err) {
      console.error("Chatbot Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "I am having trouble connecting. Please visit neotechsolution.com for direct assistance." }
      ]);
      setLoading(false);
      setInput("");
    }
  };

  const chatbotZIndex = isOpen ? 999 : 40
  const chatWindowZIndex = isOpen ? 1000 : 41
  const chatButtonZIndex = isOpen ? 1001 : 42

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end" style={{ zIndex: chatbotZIndex, pointerEvents: isOpen ? "auto" : "none" }}>
      <div className={`transform transition-all duration-300 ease-in-out mb-4 ${isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"}`} style={{ zIndex: chatWindowZIndex }}>
        <div className="w-80 bg-white border border-slate-100 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] overflow-hidden backdrop-blur-sm bg-white/95 transition-all">
          <div className="p-5 text-white bg-blue-600">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse shadow-sm"><Bot size={20} /></div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-tight">Neotech Assistant</h3>
                  <p className="text-[11px] font-medium opacity-90 tracking-wide uppercase mt-0.5">Career Partner</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 rounded-full"><X size={18} /></button>
            </div>
          </div>

          <div className="h-72 overflow-y-auto p-5 space-y-4 bg-slate-50 text-slate-800">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}>
                <div className={`max-w-[85%] px-4 py-3 text-sm font-medium shadow-sm ${msg.role === "user" ? "text-white rounded-2xl rounded-br-sm bg-blue-600" : "bg-white border border-slate-100 rounded-2xl rounded-bl-sm text-slate-700"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="flex justify-start"><div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm animate-pulse text-xs font-bold text-slate-400 uppercase tracking-widest">Neotech is typing...</div></div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} placeholder="Ask about our courses..." disabled={loading} />
              <button onClick={handleSend} disabled={loading || !input.trim()} className="text-white p-3 rounded-full shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0 bg-blue-600"><Send size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      <button className={`text-white p-4 rounded-full shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-110 ${isOpen ? "rotate-180 bg-slate-800 shadow-slate-900/50" : "animate-bounce bg-blue-600"}`} style={{ zIndex: chatButtonZIndex, pointerEvents: "auto" }} onClick={() => setIsOpen(!isOpen)}>
        <Bot size={28} />
      </button>
    </div>
  )
}

export default Chatbot;
