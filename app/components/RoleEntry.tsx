import type { Role } from "@/app/content";

/**
 * A single CV-style entry: title + company (optional Contract badge), a
 * right-aligned date, a description, and optional tech tags. Used for both
 * work history and education. The top border is dropped on the first child.
 */
export default function RoleEntry({
  title,
  company,
  contract,
  when,
  desc,
  tags,
}: Role) {
  return (
    <article className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-[6px] py-[26px] border-t border-border first:border-t-0 first:pt-0 print:break-inside-avoid">
      <div>
        <h3 className="text-[19px] font-semibold tracking-[-0.01em]">{title}</h3>
        <div className="text-[13.5px] text-accent mt-[3px]">
          {company}
          {contract && (
            <span className="inline-block ml-[9px] text-[10px] tracking-[0.1em] uppercase text-accent border rounded-full px-2 py-px align-middle border-[color-mix(in_oklab,var(--accent)_45%,var(--border))]">
              Contract
            </span>
          )}
        </div>
      </div>
      <div className="text-[12.5px] text-faint text-right whitespace-nowrap max-[760px]:text-left max-[760px]:whitespace-normal">
        {when}
      </div>
      {tags && tags.length > 0 && (
        <div className="col-span-full flex flex-wrap gap-[7px] mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] tracking-[0.03em] text-faint border border-[color-mix(in_oklab,var(--accent)_40%,var(--border))] rounded-full px-[11px] py-[3px]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="col-span-full text-sm text-muted leading-[1.7] mt-3 max-w-[640px]">
        {desc}
      </p>
    </article>
  );
}
