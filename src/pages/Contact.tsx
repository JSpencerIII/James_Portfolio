import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        }

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('Email failed to send:', error)
            setStatus('error')
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-24 relative overflow-hidden">
            <main className="w-full max-w-2xl mx-auto z-10 relative animate-fade-in-up">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Touch</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-2xl transition-all hover:border-blue-500/30"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can I help you?"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message here..."
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-[0.98] ${status === 'sending'
                            ? 'bg-slate-700 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25'
                            }`}
                    >
                        {status === 'sending' ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending...
                            </span>
                        ) : status === 'success' ? (
                            'Message Sent!'
                        ) : (
                            'Send Message'
                        )}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-400 text-center text-sm font-medium animate-fade-in">
                            Thanks! Your message has been received. I'll get back to you soon.
                        </p>
                    )}
                </form>
            </main>
        </div>
    )
}

export default Contact
