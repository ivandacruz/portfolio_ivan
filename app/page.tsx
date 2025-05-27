import Image from "next/image";
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'
import TypewriterText from './components/TypewriterText'
import BackgroundCarousel from './components/BackgroundCarousel'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'
import Link from 'next/link'

const skills = [
  {
    name: 'Next.js',
    level: 90,
    icon: '⚡',
    description: 'Desenvolvimento de aplicações web modernas com Next.js, incluindo SSR, SSG e API Routes.'
  },
  {
    name: 'React',
    level: 95,
    icon: '⚛️',
    description: 'Criação de interfaces interativas e reutilizáveis com React e seus hooks.'
  },
  {
    name: 'TypeScript',
    level: 85,
    icon: '📘',
    description: 'Desenvolvimento de código tipado e seguro com TypeScript.'
  },
  {
    name: 'Node.js',
    level: 88,
    icon: '🟢',
    description: 'Construção de APIs e servidores robustos com Node.js e Express.'
  },
  {
    name: 'Tailwind CSS',
    level: 92,
    icon: '🎨',
    description: 'Estilização moderna e responsiva com Tailwind CSS.'
  },
  {
    name: 'MongoDB',
    level: 80,
    icon: '🍃',
    description: 'Trabalho com banco de dados NoSQL e modelagem de dados.'
  },
  {
    name: 'PostgreSQL',
    level: 75,
    icon: '🐘',
    description: 'Gerenciamento de bancos de dados relacionais e consultas SQL.'
  },
  {
    name: 'Git',
    level: 85,
    icon: '📦',
    description: 'Controle de versão e colaboração em equipe com Git.'
  }
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "Uma plataforma de e-commerce completa com carrinho de compras, pagamentos e sistema de autenticação.",
    image: "/portfolio/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    // demoUrl: "https://demo-ecommerce.com",
    demoUrl: "https://chromeeletronics.netlify.app/",
    githubUrl: "https://github.com/ivandacruz/Chrome-eletronics"
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias e notificações.",
    image: "/portfolio/project2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://demo-tasks.com",
    githubUrl: "https://github.com/yourusername/tasks"
  },
  {
    title: "Social Media Dashboard",
    description: "Dashboard para análise de métricas de redes sociais com gráficos interativos e relatórios.",
    image: "/portfolio/project3.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
    demoUrl: "https://demo-dashboard.com",
    githubUrl: "https://github.com/yourusername/dashboard"
  }
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50/90 to-gray-100/90 dark:from-gray-900/90 dark:to-gray-800/90 relative">
          <BackgroundCarousel />
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src="/portfolio/hero.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Ivan
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                <TypewriterText
                  texts={[
                    "Desenvolvedor Web Full Stack",
                    "Especialista em React",
                    "Apaixonado por UI/UX",
                    "Criador de soluções digitais"
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseTime={2000}
                />
              </div>
              <div className="flex gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver Projetos
                </Link>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Sobre Mim
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Um pequeno resumo sobre min! 
            </p>
            {/* <p className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Um pequeno resumo sobre min! 
            </p> */}
              <p className="mb-4">
                Sou um desenvolvedor web apaixonado por criar soluções digitais inovadoras
                e funcionais. Com experiência em desenvolvimento full stack, busco sempre
                entregar produtos de alta qualidade que atendam às necessidades dos usuários.
              </p>
              <p>
                Minha jornada na programação começou com a curiosidade de entender como
                as coisas funcionam na web, e desde então venho me especializando em
                tecnologias modernas e boas práticas de desenvolvimento.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Habilidades
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
                Conheça minhas principais habilidades técnicas e ferramentas que utilizo para desenvolver soluções digitais.
              </p>
              <Link
                href="/skills"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Ver todas as habilidades
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {skills.slice(0, 8).map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Projetos
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Confira alguns dos meus projetos mais recentes. Cada projeto é uma oportunidade de aplicar e aprimorar minhas habilidades.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Ver todos os projetos
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Contato
            </h2>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
