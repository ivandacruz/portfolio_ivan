'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const experiences = [
    {
      period: '2023 - Presente',
      role: 'Desenvolvedor Full Stack',
      company: 'Freelancer',
      description: 'Desenvolvimento de aplicações web completas, desde o frontend até o backend, utilizando tecnologias modernas como React, Next.js, Node.js e TypeScript.'
    },
    {
      period: '2022 - 2023',
      role: 'Desenvolvedor Frontend',
      company: 'Empresa XYZ',
      description: 'Desenvolvimento de interfaces de usuário responsivas e interativas, implementação de novas funcionalidades e otimização de performance.'
    }
  ]

  const education = [
    {
      period: '2020 - 2023',
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade ABC',
      description: 'Formação focada em desenvolvimento de software, algoritmos e estruturas de dados.'
    },
    {
      period: '2019 - 2020',
      course: 'Curso Técnico em Informática',
      institution: 'Escola Técnica XYZ',
      description: 'Fundamentos de programação, redes e sistemas operacionais.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Título da Página */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Sobre Mim
          </h1>
        </div>
      </div>

      {/* Botão Voltar */}
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
        {/* Seção de Apresentação */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/portfolio/hero.png"
                alt="Foto de Perfil"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ivan da Cruz
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Desenvolvedor Web Full Stack
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e funcionais.
                Com experiência em desenvolvimento full stack, busco sempre entregar produtos de alta
                qualidade que atendam às necessidades dos usuários.
              </p>
            </div>
          </div>
        </div>

        {/* Experiência Profissional */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Experiência Profissional
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formação */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Formação
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.course}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 