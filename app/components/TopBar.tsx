import { navLinks } from "@/app/content";
import { WRAP } from "@/app/components/Section";
import { cn } from "@/lib/utils";

export default function TopBar() {
  return (
    <div
      className={cn(
        WRAP,
        "flex items-baseline justify-between py-[26px]"
      )}
    >
      <span className="text-[17px] italic tracking-[-0.01em]">
        Bopke<span className="text-accent">.dev</span>
      </span>
      <nav className="flex gap-[26px] max-[760px]:hidden print:hidden">
        {navLinks.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="text-xs tracking-[0.06em] text-faint transition-colors duration-200 hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
