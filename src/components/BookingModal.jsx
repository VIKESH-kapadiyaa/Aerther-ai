import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BookingModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Placeholder for the correct Booking Webhook URL
            // Please provide the separate URL for the "Book a Call" automation
            const bookingWebhookUrl = "YOUR_BOOKING_WEBHOOK_URL_HERE";

            const response = await fetch(bookingWebhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Booking failed');

            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', phone: '', company: '' });
            }, 3000);

        } catch (error) {
            console.error('Booking error:', error);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        aria-hidden="true"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none -mr-32 -mt-32" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 id="modal-title" className="text-2xl font-black text-white tracking-tight mb-2">INITIALIZE UPLINK</h3>
                                    <p className="text-slate-400 text-sm">Enter your coordinates to schedule a consultation.</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white"
                                    aria-label="Close booking modal"
                                >
                                    ✕
                                </button>
                            </div>

                            {status === 'success' ? (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        ✓
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Request Transmitted</h4>
                                    <p className="text-slate-400 text-sm">Our neural agents will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:bg-white/[0.07] outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:bg-white/[0.07] outline-none transition-all"
                                                placeholder="Acme Corp"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:bg-white/[0.07] outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:bg-white/[0.07] outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <button
                                        disabled={status === 'loading'}
                                        className="w-full mt-4 bg-white text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        {status === 'loading' ? 'Transmitting...' : 'Confirm Book Call'}
                                    </button>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-xs text-center pt-2">Transmission failed. Please try again.</p>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
