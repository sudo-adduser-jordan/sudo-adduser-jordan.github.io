import { projects } from "@/lib/data"
import ProjectCard from "./project-card"

export default function Projects() {
  return (
    <section id="projects" className="min-h-0 lg:min-h-screen flex flex-col justify-center py-16 lg:py-0">
      <section className="flex flex-col gap-8 relative">
        <div className="absolute -inset-8 dot-grid opacity-40 pointer-events-none rounded-lg" />

        <div className="flex items-center gap-6 relative">
          <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">
            Projects
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-200 via-[var(--color-accent)]/20 to-transparent dark:from-neutral-800" />
        </div>

        <div className="flex flex-col gap-1">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              icon={project.icon}
              links={project.links}
            />
          ))}
        </div>
      </section>
    </section>
  )
}
