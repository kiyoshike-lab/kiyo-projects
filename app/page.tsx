import Link from "next/link";
import { ProjectLink } from "@/components/project-link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--ambient),_transparent_44rem)]" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 py-8 sm:px-8 sm:py-12">
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Kiyo Projects home"
            className="flex items-center gap-3"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--mark-border)] bg-[var(--mark-bg)] shadow-[0_14px_35px_var(--shadow)]">
              <span className="font-[var(--font-display)] text-xl font-semibold text-[var(--accent)]">
                K
              </span>
            </span>
            <span className="text-sm font-medium tracking-[0.18em] text-[var(--muted)]">
              KIYO
            </span>
          </Link>
          <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
            Portfolio
          </span>
        </header>

        <div className="flex flex-1 flex-col justify-center py-12 sm:py-16">
          <div className="mb-11 text-center sm:mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Digital Service Collection
            </p>
            <h1 className="font-[var(--font-display)] text-5xl font-semibold leading-none text-[var(--heading)] sm:text-7xl">
              Kiyo Projects
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-8 text-[var(--foreground)] sm:text-lg">
              Creating digital services that solve everyday problems.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-7 text-[var(--muted)] sm:text-base">
              これまでに制作したWebサービスをまとめています。
              各ボタンからサービスへアクセスできます。
            </p>
          </div>

          <nav aria-label="Service links" className="grid gap-4 sm:gap-5">
            {projects.map((project) => (
              <ProjectLink key={project.name} project={project} />
            ))}
          </nav>
        </div>

        <footer className="pb-2 text-center text-xs text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Kiyo Projects</p>
        </footer>
      </section>
    </main>
  );
}
