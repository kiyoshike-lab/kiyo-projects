import Link from "next/link";
import { ProjectLink } from "@/components/project-link";
import { projects } from "@/data/projects";

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Contact", href: "#" },
];

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
          <div className="mb-10 text-center sm:mb-12">
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

          <section className="mb-9 rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,var(--card),var(--card-sheen))] px-6 py-6 shadow-[0_20px_60px_var(--shadow)] sm:px-8 sm:py-7">
            <p className="text-sm font-semibold text-[var(--accent)]">Kiyo</p>
            <h2 className="mt-2 text-2xl font-semibold leading-9 text-[var(--heading)] sm:text-3xl">
              学生エンジニア・Webサービス開発
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              日常の課題を解決するWebサービスを企画・開発しています。
            </p>
          </section>

          <nav aria-label="Service links" className="grid gap-4 sm:gap-5">
            {projects.map((project) => (
              <ProjectLink key={project.name} project={project} />
            ))}
          </nav>
        </div>

        <footer className="border-t border-[var(--line)] py-8 text-center text-xs text-[var(--muted)]">
          <nav
            aria-label="Social links"
            className="mb-4 flex flex-wrap justify-center gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href === "#" ? undefined : "_blank"}
                rel={link.href === "#" ? undefined : "noopener noreferrer"}
                className="rounded-full border border-[var(--line)] px-4 py-2 font-medium text-[var(--foreground)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p>© {new Date().getFullYear()} Kiyo Projects</p>
        </footer>
      </section>
    </main>
  );
}
