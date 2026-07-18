import { resources } from "@/lib/data"

export default function Resources() {
  return (
    <section id="resources" className="min-h-0 lg:min-h-screen flex flex-col justify-center py-16 lg:py-0">
      <section className="flex flex-col gap-8">
        <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">
          Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          {resources.map((resource) => (
            <a
              key={resource.name}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300 w-fit"
            >
              {resource.name}
            </a>
          ))}
        </div>
      </section>
    </section>
  )
}
