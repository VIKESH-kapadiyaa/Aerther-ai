import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        { role: 'bot', content: "Systems online. capable of answering queries about Aether AI protocols." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInputValue("");
        setIsLoading(true);

        try {
            // Using the n8n webhook provided by the user
            // We'll send it as a GET request with query params if it's a simple webhook, 
            // OR a POST if it expects a body. 
            // Given it's a "chat", POST is safer for long text.
            // Common n8n pattern for chat is { "chatInput": "..." } or { "message": "..." }

            // Updated to the PRODUCTION URL (Active Workflow)
            const response = await fetch("https://atherai2026.app.n8n.cloud/webhook/1550603d-8997-4018-afd7-8d1ecb4bd6a5", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chatInput: userMessage,
                    message: userMessage,
                    sessionId: "session-" + Math.random().toString(36).substr(2, 9) // Adding a session ID often helps n8n workflows
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Handle various likely response formats from n8n
            // Usually returns { output: "..." } or { text: "..." } or just the JSON
            let botResponse = "Protocol unclear.";

            if (typeof data === 'string') {
                botResponse = data;
            } else if (data.output) {
                botResponse = data.output;
            } else if (data.text) {
                botResponse = data.text;
            } else if (data.message) {
                botResponse = data.message;
            } else if (Array.isArray(data) && data[0]?.output) {
                botResponse = data[0].output;
            } else {
                // If we receive a JSON object but unknown key, just stringify it for debugging or show generic
                console.log("Unknown response format:", data);
                botResponse = "Received complex data. Check console.";
            }

            setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);

        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'bot', content: "Connection to neural core interrupted. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-16 right-0 w-[350px] h-[500px] bg-[#0a0a0a] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-cyan-950/20 p-4 border-b border-cyan-500/20 flex justify-between items-center shrink-0">
                            <div>
                                <h3 className="text-cyan-500 font-bold tracking-wider text-sm">AETHER ASSISTANT</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-black/50 flex flex-col gap-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${msg.role === 'user'
                                            ? 'bg-cyan-500/10 border border-cyan-500/30 text-white rounded-tr-none'
                                            : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 p-3 rounded-lg rounded-tl-none flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/5 bg-black/80 shrink-0">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Execute query..."
                                    disabled={isLoading}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-slate-600 disabled:opacity-50"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-500 hover:text-white transition-colors disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <span className="block w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        '→'
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors relative group ${isOpen ? 'bg-red-500/10 border border-red-500/50 text-red-500' : 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-500'
                    }`}
            >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity ${isOpen ? 'bg-red-500' : 'bg-cyan-500'}`} />

                {/* Icon */}
                <div className="relative z-10 text-2xl">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    )}
                </div>
            </motion.button>
        </div>
    );
};
