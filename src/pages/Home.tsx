import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">

      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Portfolio
        </h1>
      </header>

      <main className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12 z-10 relative">
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
            Welcome To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              my site
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full justify-center mt-8">
          <Link
            to="/about"
            className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-lg font-semibold">About Me</span>
          </Link>

          <Link
            to="/projects"
            className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transition-all hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-lg font-semibold">My Projects</span>
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-6 text-slate-500 text-sm z-10">
        © {new Date().getFullYear()} James Portfolio. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
