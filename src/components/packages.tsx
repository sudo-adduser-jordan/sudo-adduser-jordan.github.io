import { ExternalLink } from "lucide-react"
import { packageGroups } from "@/lib/data"

export default function Packages() {
	return (
		<section id="packages" className="flex flex-col py-16 lg:py-24">
			<section className="flex flex-col gap-8">
				<div className="flex items-center gap-6">
					<h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">
						Packages
					</h2>
					<div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-200 via-[var(--color-accent)]/20 to-transparent dark:from-neutral-800" />
				</div>

				<div className="flex flex-col gap-10">
					{packageGroups.map((group) => (
						<div key={group.label} className="flex flex-col">
							<div className="flex items-baseline justify-between gap-4 pb-2">
								<h3 className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
									{group.label}
								</h3>
								<a
									href={group.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 text-[11px] text-neutral-400 dark:text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
								>
									{group.source}
									<ExternalLink className="w-2.5 h-2.5" />
								</a>
							</div>

							{group.packages.map((pkg) => {
								const [category] = pkg.atom.split("/")

								return (
									<article
										key={pkg.name}
										className="flex items-baseline justify-between gap-4 py-2.5 border-b border-neutral-100 dark:border-neutral-900 last:border-b-0"
									>
										<div className="flex items-baseline gap-3 min-w-0">
											<a
												href={pkg.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 whitespace-nowrap"
											>
												{pkg.atom && (
													<span className="text-neutral-400 dark:text-neutral-600">
														{category}/
													</span>
												)}
												{pkg.name}
											</a>
											<p className="text-xs text-neutral-400 dark:text-neutral-600 truncate hidden md:block">
												{pkg.description}
											</p>
										</div>
										<div className="flex items-center gap-2 sm:gap-3 shrink-0">
											<span className="text-xs text-neutral-400 dark:text-neutral-600 font-mono">
												{pkg.version}
											</span>
										</div>
									</article>
								)
							})}
						</div>
					))}
				</div>
			</section>
		</section>
	)
}
