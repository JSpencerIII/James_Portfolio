import { Link } from 'react-router-dom'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Project Alpha",
            description: "A cutting-edge web application built with React and Node.js. Features real-time data synchronization and a responsive UI.",
            tags: ["React", "Node.js", "Socket.io"],
            gradient: "from-pink-500 to-rose-500"
        },
        {
            id: 2,
            title: "Neon Dashboard",
            description: "An analytics dashboard with dark mode and data visualization. Optimized for performance and accessibility.",
            tags: ["TypeScript", "D3.js", "Tailwind"],
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            id: 3,
            title: "E-Commerce API",
            description: "A scalable RESTful API for a modern e-commerce platform. Includes authentication, payment processing, and inventory management.",
            tags: ["Express", "MongoDB", "Stripe"],
            gradient: "from-cyan-500 to-blue-500"
        }
    ]

    return (
        <div className="min-h-screen p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex justify-between items-center">
                    <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        ← Back to Home
                    </Link>
                </header>

                <div className="space-y-4 text-center md:text-left animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        My Projects
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all hover:shadow-2xl hover:-translate-y-1"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-700 text-slate-300 border border-slate-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full mt-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
