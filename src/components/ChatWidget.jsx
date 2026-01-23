import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const ChatWidget = () => {

    // Function to open the chat in a new tab
    const openChat = () => {
        window.open('https://atherai2026.app.n8n.cloud/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat', '_blank');
    };

    return (
        <div className="chat-widget-container fixed bottom-8 right-8 z-40">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openChat}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border transition-all duration-300 bg-cyan-500 text-black border-cyan-400 hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            >
                <MessageSquare size={24} fill="currentColor" />
            </motion.button>
        </div>
    );
};
