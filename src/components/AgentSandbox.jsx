import { motion } from 'framer-motion';

export const AgentSandbox = ({ project }) => {
    const { sandboxType, sandboxUrl, name, color } = project;

    // Terminal Renderer
    const TerminalView = () => (
        <div className="h-full bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-400 ml-2">agent-terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 space-y-2 text-green-400">
                <div className="flex items-start gap-2">
                    <span className="text-cyan-400">$</span>
                    <span>./initialize_agent.sh</span>
                </div>
                <div className="text-slate-500 text-xs">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        [INFO] Loading neural networks...
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        [INFO] Connecting to knowledge base...
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        [SUCCESS] Agent {name} is ready
                    </motion.div>
                </div>
                <div className="flex items-start gap-2 mt-4">
                    <span className="text-cyan-400">$</span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        agent --status
                    </motion.span>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-slate-400 text-xs pl-4"
                >
                    Status: <span style={{ color }}>ACTIVE</span>
                    <br />
                    Uptime: 99.9%
                    <br />
                    Tasks Completed: 1,247
                    <br />
                    Efficiency: 98.3%
                </motion.div>
                <div className="flex items-start gap-2 mt-4">
                    <span className="text-cyan-400">$</span>
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="inline-block overflow-hidden whitespace-nowrap"
                    >
                        <span className="animate-pulse">_</span>
                    </motion.span>
                </div>
            </div>
        </div>
    );

    // Chat Renderer
    const ChatView = () => (
        <div className="h-full bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl" style={{ background: `${color}20` }}>
                    🤖
                </div>
                <div>
                    <div className="text-sm font-bold text-white">{name}</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Online
                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-2"
                >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: `${color}20` }}>
                        🤖
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-white">
                            Hello! I'm {name}. How can I assist you today?
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-2 justify-end"
                >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-white">
                            Show me what you can do!
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex gap-2"
                >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: `${color}20` }}>
                        🤖
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-white">
                            {project.description.slice(0, 100)}...
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                        disabled
                    />
                    <button className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-lg text-sm">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );

    // iframe Renderer
    const IframeView = () => (
        <div className="h-full bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            {sandboxUrl ? (
                <iframe
                    src={sandboxUrl}
                    className="w-full h-full"
                    title={name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-4">🌐</div>
                        <p className="text-slate-400 text-sm">
                            Interactive demo coming soon
                        </p>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="h-full">
            {sandboxType === 'terminal' && <TerminalView />}
            {sandboxType === 'chat' && <ChatView />}
            {sandboxType === 'iframe' && <IframeView />}
        </div>
    );
};
