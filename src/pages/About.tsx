import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="min-h-screen p-6 md:p-12">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header / Nav */}
                <header className="flex justify-between items-center">
                    <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        ← Back to Home
                    </Link>
                </header>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
                    {/* Placeholder Profile Image */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                            <span className="text-4xl">👋</span>
                        </div>
                    </div>

                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            About Me
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Hi, I'm James. I'm an aspiring Cloud Engineer focused on building resilient, scalable systems.
                            I bridge the gap between frontend development and cloud infrastructure, specializing in deploying
                            type-safe applications that scale with demand.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-slate-700 pb-2">Technical Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vite', 'Git'].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
