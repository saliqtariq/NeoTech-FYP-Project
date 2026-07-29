"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Bot, X, Send } from "lucide-react"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: "bot", text: "👋 Hi! Welcome to Neotech Solutions. How can I help you achieve your career goals today?" }])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Ensure your API key is set in your .env file as VITE_GROQ_API_KEY
  const API_KEY = import.meta.env.VITE_GROQ_API_KEY

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
    const userQuery = input;
    setInput("");
    setLoading(true);

    // 1. Try Live Groq AI Model
    if (API_KEY) {
      try {
        const systemInstruction = `You are the friendly, persuasive AI Career Assistant for "Neotech Solutions" (a top Institute of Technology & Software House in Lahore, Pakistan).
Your goal is to guide students, answer course inquiries with exact details, and enthusiastically encourage them to enroll!

NEOTECH COURSES & DETAILS:
1. MERN Full Stack Development: 4 Months | Rs. 5,997/mo | Covers MongoDB, Express, React, Node, TypeScript. Build 5+ real projects.
2. Full Stack AI (ML + DL): 3 Months | Rs. 5,997/mo | Covers Python, PyTorch, Neural Networks, Model Deployment, LLMs.
3. Cybersecurity & Ethical Hacking: 3 Months | Rs. 5,997/mo | Penetration testing labs, network security, defense.
4. Data Analysis Professional: 3 Months | Rs. 1,999/mo | Python, SQL, PowerBI, Excel, Data Visualization.
5. DevOps Engineering: 3 Months | Rs. 5,997/mo | Docker, Kubernetes, CI/CD, AWS Cloud, Terraform.
6. UI / UX Design: 2 Months | Rs. 5,997/mo | Figma, Wireframing, User Research, Prototyping.
7. Spoken English Mastery: 2 Months | Special Rates | Business Communication, Accent, Interview Prep.

NEOTECH ADVANTAGES TO EMPHASIZE:
- Verified Certificates recognized globally.
- 98% Job Placement & hiring partner referrals.
- 1-on-1 Mentorship from senior software engineers.
- Flexible Monthly Installments available in Cart.

RULES:
- Be warm, helpful, professional, and persuasive.
- Keep responses concise and easy to read (use emojis and bullet points).
- Handle typos gracefully and answer any career question. Always motivate them to enroll!`;

        const apiMessages = [
          { role: "system", content: systemInstruction },
          ...updatedMessages.map(m => ({
            role: m.role === "bot" ? "assistant" : "user",
            content: m.text
          }))
        ];

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: apiMessages,
            temperature: 0.7,
            max_tokens: 1024
          })
        });

        if (!response.ok) {
          throw new Error(`Groq API Error: ${response.status}`);
        }

        const data = await response.json();
        const botReply = data.choices[0].message.content;

        setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
        setLoading(false);
        return;
      } catch (err) {
        console.warn("Groq API call failed, using smart fallback engine:", err);
      }
    }

    // 2. Fallback Smart Rule Engine (works even if API key is not set or network drops)
    setTimeout(() => {
      const query = userQuery.toLowerCase();
      let botReply = "";

      if (query.match(/\b(hi|hello|hey|greetings|hola)\b/)) {
        botReply = "👋 Hello! Welcome to **Neotech Solutions**, the premier Tech Institute & Software House! How can I assist you with your career goals today?";
      } else if (query.includes("price") || query.includes("fee") || query.includes("cost") || query.includes("discount") || query.includes("installment")) {
        botReply = "💰 **Affordable & Flexible Pricing at Neotech:**\n\n• **MERN Full Stack:** Rs. 5,997 / month\n• **Data Analysis Professional:** Rs. 1,999 / month\n• **Cybersecurity & Ethical Hacking:** Rs. 5,997 / month\n• **Full Stack AI (ML + DL):** Rs. 5,997 / month\n• **DevOps Engineering:** Rs. 5,997 / month\n• **UI/UX Design:** Rs. 5,997 / month\n• **Spoken English Mastery:** Promotional discounts available!\n\n✨ *We offer monthly installment options! Would you like help enrolling in any course?*";
      } else if (query.includes("mern") || query.includes("react") || query.includes("node") || query.includes("mongo") || query.includes("web")) {
        botReply = "🚀 **MERN Full Stack Development (4 Months):**\n\n**Summary:** Master MongoDB, Express.js, React, Node.js, and TypeScript.\n\n**Why Neotech?** Build 5+ real portfolio projects with 1-on-1 developer mentorship!";
      } else if (query.includes("ai") || query.includes("machine") || query.includes("learning") || query.includes("ml")) {
        botReply = "🤖 **Full Stack AI (ML + DL) (3 Months):**\n\n**Summary:** Learn Python, PyTorch, Neural Networks, and LLM integrations.\n\n**Why Neotech?** AI is the highest-paying tech field. Build real AI products with us!";
      } else if (query.includes("cyber") || query.includes("hack") || query.includes("security")) {
        botReply = "🛡️ **Cybersecurity & Ethical Hacking (3 Months):**\n\n**Summary:** Penetration Testing, Network Security, and Defense Labs.\n\n**Why Neotech?** Earn globally-recognized certificates and high-demand security skills!";
      } else if (query.includes("data") || query.includes("analyst") || query.includes("python") || query.includes("sql")) {
        botReply = "📊 **Data Analysis Professional (3 Months):**\n\n**Summary:** Learn Python, SQL, PowerBI, Excel, and Data Visualization.\n\n**Why Neotech?** High starting salaries & beginner-friendly curriculum!";
      } else if (query.includes("devops") || query.includes("docker") || query.includes("cloud")) {
        botReply = "⚡ **DevOps Engineering (3 Months):**\n\n**Summary:** Docker, Kubernetes, CI/CD, AWS Cloud, and Terraform.\n\n**Why Neotech?** Essential for high-scalability cloud architecture roles!";
      } else if (query.includes("design") || query.includes("ui") || query.includes("ux") || query.includes("figma")) {
        botReply = "🎨 **UI / UX Design (2 Months):**\n\n**Summary:** Figma, Wireframing, User Research, Prototyping, and Design Systems.\n\n**Why Neotech?** Build a world-class portfolio that impresses global clients!";
      } else if (query.includes("english") || query.includes("spoken")) {
        botReply = "🗣️ **Spoken English Mastery (2 Months):**\n\n**Summary:** Fluency, Accent Neutralization, and Business Interview Prep.\n\n**Why Neotech?** Master English to crack international remote jobs!";
      } else if (query.includes("why") || query.includes("benefit") || query.includes("certif")) {
        botReply = "🌟 **Why Neotech Solutions?**\n\n1. 📜 **Verified Certificates:** Recognized globally.\n2. 💼 **98% Job Placement Support:** Hiring partner referrals.\n3. 👨‍🏫 **Live Mentorship:** Direct senior developer guidance.\n4. 🚀 **Real Projects:** Portfolio-ready software!\n\nReady to get started? Head to **Online Courses** to add a course to your cart!";
      } else if (query.includes("enroll") || query.includes("join") || query.includes("apply") || query.includes("buy")) {
        botReply = "🎯 **How to Enroll:**\n\n1. Click **Online Courses** in the top menu.\n2. Click **Add to Cart** on your chosen course.\n3. Select **Full Fee** or **Monthly Installments**.\n4. Complete checkout to start learning!";
      } else {
        botReply = `At **Neotech Solutions**, we empower students with market-leading skills in MERN Stack, AI, Cybersecurity, Data Analysis, DevOps, UI/UX, and Spoken English.\n\nCould you clarify what you'd like to learn? I'd love to help you find the best path!`;
      }

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
      setLoading(false);
    }, 600);
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
