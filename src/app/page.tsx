import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <section className="p-y-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto p-x-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Web Developer specializing in modern frontend technologies
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section className="section container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of the project and the technologies used.
                </p>
                <div className="flex justify-between">
                  <Link href="/projects/project-1" className="text-primary hover:underline">View Details</Link>
                  <a href="https://demo-link.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}