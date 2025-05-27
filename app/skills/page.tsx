'use client'

import Link from 'next/link'

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      technologies: [
        {
          name: 'React',
          description: 'Biblioteca JavaScript para construção de interfaces',
          icon: '⚛️',
          docs: 'https://react.dev',
          level: 'Avançado'
        },
        {
          name: 'Next.js',
          description: 'Framework React para aplicações web',
          icon: '▲',
          docs: 'https://nextjs.org',
          level: 'Avançado'
        },
        {
          name: 'TypeScript',
          description: 'Superset tipado de JavaScript',
          icon: '📘',
          docs: 'https://www.typescriptlang.org',
          level: 'Intermediário'
        },
        {
          name: 'Tailwind CSS',
          description: 'Framework CSS utilitário',
          icon: '🎨',
          docs: 'https://tailwindcss.com',
          level: 'Avançado'
        }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        {
          name: 'Node.js',
          description: 'Runtime JavaScript para backend',
          icon: '🟢',
          docs: 'https://nodejs.org',
          level: 'Avançado'
        },
        {
          name: 'Express',
          description: 'Framework web para Node.js',
          icon: '🚂',
          docs: 'https://expressjs.com',
          level: 'Avançado'
        },
        {
          name: 'PostgreSQL',
          description: 'Banco de dados relacional',
          icon: '🐘',
          docs: 'https://www.postgresql.org',
          level: 'Intermediário'
        },
        {
          name: 'MongoDB',
          description: 'Banco de dados NoSQL',
          icon: '🍃',
          docs: 'https://www.mongodb.com',
          level: 'Intermediário'
        }
      ]
    },
    {
      category: 'Ferramentas & DevOps',
      technologies: [
        {
          name: 'Git',
          description: 'Sistema de controle de versão',
          icon: '📦',
          docs: 'https://git-scm.com',
          level: 'Avançado'
        },
        {
          name: 'Docker',
          description: 'Plataforma de containerização',
          icon: '🐳',
          docs: 'https://www.docker.com',
          level: 'Intermediário'
        },
        {
          name: 'AWS',
          description: 'Serviços de cloud computing',
          icon: '☁️',
          docs: 'https://aws.amazon.com',
          level: 'Básico'
        },
        {
          name: 'Linux',
          description: 'Sistema operacional',
          icon: '🐧',
          docs: 'https://www.linux.org',
          level: 'Intermediário'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Título da Página */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Minhas Habilidades
          </h1>
        </div>
      </div>

      {/* Botões de Navegação */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-end">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {skills.map((category) => (
            <div key={category.category} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl">{tech.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {tech.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {tech.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                        {tech.level}
                      </span>
                      <a
                        href={tech.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        Documentação →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 