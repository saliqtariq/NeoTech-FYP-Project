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
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

      const chatHistoryContext = updatedMessages
        .slice(-6)
        .map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");

      const prompt = `
You are a friendly and professional AI Career Consultant for Neotech Solutions (https://www.neotechsolution.com).

🌟 CONTEXT MANAGEMENT:
Use this chat history to provide a continuous, helpful experience:
${chatHistoryContext}

🌟 STRICT RULES:
- USE PLAIN TEXT ONLY. Never use asterisks (*), bold (**), hashtags (#), or symbols.
- NO PRICING: If the user asks about fees, prices, or charges, DO NOT provide numbers. Instead, tell them to contact Neotech Solutions directly via the website or contact details for the most accurate pricing.
- Keep responses short and optimized (max 3 sentences).

🎯 BUSINESS GOALS:
- Primary: Promote Neotech Courses (UI/UX, Data Analysis, Data Science, DevOps, Cloud Computing, Full Stack, AI/ML, Cyber Security).
- Secondary: Mention Software House services (Web/App Dev, AI Solutions) for business queries.

✅ LOGIC:
Be polite and encouraging. Answer tech queries briefly, then suggest a relevant Neotech course.

⚠️ RESTRICTION:
If the query is unrelated to Neotech topics, say: "I can only assist with information regarding Neotech Solutions' professional courses and services."

Latest User Question: ${input}
`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      // Final regex clean to ensure absolutely no markdown symbols appear in UI
      const botText = response.text().replace(/[*#_~`]/g, "").trim();

      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    } catch (err) {
      console.error("Gemini Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "I am having trouble connecting. Please visit neotechsolution.com for direct assistance." }
      ]);
    } finally {
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
