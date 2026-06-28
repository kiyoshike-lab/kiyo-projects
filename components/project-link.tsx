"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

const placeholderLogo = "/logos/placeholder.svg";

type ProjectLinkProps = {
  project: Project;
};

function ProjectCardContent({
  project,
  isPublished,
}: ProjectLinkProps & {
  isPublished: boolean;
}) {
  return (
    <>
      <span className="flex min-w-0 items-start gap-5 sm:items-center">
        <span className="grid h-[72px] w-[72px] shrink-0 place-items-center overflow-hidden rounded-[22px] border border-[var(--logo-line)] bg-[var(--logo-bg)] shadow-[inset_0_1px_0_var(--logo-highlight),0_12px_28px_var(--shadow)]">
          <Image
            src={project.image}
            alt=""
            width={72}
            height={72}
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = placeholderLogo;
            }}
          />
        </span>
        <span className="min-w-0">
          <span className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--tag-line)] bg-[var(--tag-bg)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
              {project.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isPublished
                  ? "bg-[var(--status-live-bg)] text-[var(--status-live)]"
                  : "bg-[var(--status-dev-bg)] text-[var(--status-dev)]"
              }`}
            >
              {isPublished ? "公開中" : "開発中"}
            </span>
          </span>
          <span className="mt-3 block text-[1.08rem] font-semibold leading-7 text-[var(--heading)] sm:text-[1.22rem]">
            {project.name}
          </span>
          <span className="mt-2 block text-[0.94rem] leading-7 text-[var(--muted)] sm:text-[0.98rem]">
            {project.description}
          </span>
        </span>
      </span>
      <span
        className={`inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full px-5 text-sm font-semibold transition duration-300 sm:self-center ${
          isPublished
            ? "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[0_12px_28px_var(--accent-shadow)] group-hover:translate-x-1 group-hover:bg-[var(--accent-hover)]"
            : "border border-[var(--line)] bg-[var(--disabled-bg)] text-[var(--muted)]"
        }`}
      >
        {isPublished ? "サイトを見る" : "準備中"}
        {isPublished ? (
          <svg
            aria-hidden="true"
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
        ) : null}
      </span>
    </>
  );
}

export function ProjectLink({ project }: ProjectLinkProps) {
  const isPublished = project.url !== "#";
  const cardClassName = `group flex min-h-28 flex-col gap-5 rounded-[30px] border border-[var(--line)] bg-[linear-gradient(135deg,var(--card),var(--card-sheen))] px-5 py-5 shadow-[0_20px_60px_var(--shadow)] transition duration-300 ease-out sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:py-6 ${
    isPublished
      ? "hover:-translate-y-1.5 hover:border-[var(--accent-soft)] hover:bg-[linear-gradient(135deg,var(--card-hover),var(--card-sheen-hover))] hover:shadow-[0_28px_80px_var(--shadow-strong)] active:scale-[0.985]"
      : "cursor-not-allowed opacity-70"
  }`;

  if (!isPublished) {
    return (
      <div aria-disabled="true" className={cardClassName}>
        <ProjectCardContent project={project} isPublished={isPublished} />
      </div>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
    >
      <ProjectCardContent project={project} isPublished={isPublished} />
    </a>
  );
}
