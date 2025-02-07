import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar/nav';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dishly",
    description: "A social media platform for chefs to share their recipes and connect with other chefs.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/VAS-18/Dishly",
    liveUrl: "demo.com"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Lorem Ipsum or whatever it is",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com"
  },
  {
    id: 3,
    title: "Project One",
    description: "Meoweowowowo.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com"
  },
];

export default function ProjectsPage() {
  return (
     
    <main>
      <div className='p-10'>
        <Link href="/" className='hover:text-white'>{"<- Go back"}</Link>
      </div>
      <div className="min-h-screen p-20 ">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">My Projects</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents different skills
          and technologies I've mastered along my journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="overflow-hidden hover:transform hover:scale-105 transition-transform duration-500 border-2 border-white border-dashed"
          >
            <div className="aspect-video relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700  text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className=" text-center px-4 py-2 bg-gray transition-colors retro-button-github"
                >
                  GitHub
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 bg-green-800 text-white hover:bg-green-500 transition-colors retro-button drop-shadow-lg"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
} 