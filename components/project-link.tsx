"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

const placeholderLogo = "/logos/placeholder.svg";

type ProjectLinkProps = {
  project: Project;
};

export function ProjectLink({ project }: ProjectLinkProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-20 items-center justify-between gap-4 rounded-[28px] border border-[var(--line)] bg-[var(--card)] px-4 py-4 shadow-[0_16px_42px_var(--shadow)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:bg-[var(--card-hover)] hover:shadow-[0_22px_54px_var(--shadow-strong)] active:scale-[0.985] sm:px-6"
    >
      <span className="flex min-w-0 items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--logo-bg)]">
          <Image
            src={project.image}
            alt=""
            width={56}
            height={56}
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = placeholderLogo;
            }}
          />
        </span>
        <span className="min-w-0">
          <span className="block text-base font-semibold text-[var(--heading)] sm:text-lg">
            {project.name}
          </span>
          <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">
            {project.description}
          </span>
        </span>
      </span>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--accent-line)] text-[var(--accent)] transition duration-300 group-hover:translate-x-1 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </svg>
      </span>
    </a>
  );
}
