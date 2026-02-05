import { useState } from 'react'
import { Rocket, Zap, Code, Palette } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Company Web
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Built with Vite + React + TypeScript + Tailwind CSS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Rocket className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">Lightning fast development with Vite</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Zap className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Modern</h3>
            <p className="text-gray-600 dark:text-gray-300">Latest React with TypeScript</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Code className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Icons</h3>
            <p className="text-gray-600 dark:text-gray-300">Beautiful icons with Lucide React</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Palette className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Styled</h3>
            <p className="text-gray-600 dark:text-gray-300">Utility-first CSS with Tailwind</p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Count is {count}
          </button>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Click the button to test interactivity
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
