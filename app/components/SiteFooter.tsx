import { SITE } from "@/app/content";

export default function SiteFooter() {
  return (
    <div className="flex justify-between flex-wrap gap-3 pt-[30px] pb-[120px] text-xs text-faint">
      <span>© 2026 Michał Kubik · Łódź, Poland</span>
      <span className="flex gap-5">
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener"
          className="text-muted hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener"
          className="text-muted hover:text-accent"
        >
          LinkedIn
        </a>
      </span>
    </div>
  );
}
