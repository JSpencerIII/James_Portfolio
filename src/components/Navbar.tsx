import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl px-6 py-3 shadow-xl">
                <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    JP
                </Link>

                <div className="flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-all hover:text-blue-400 ${location.pathname === link.path ? 'text-blue-400' : 'text-slate-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
