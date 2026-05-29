import { Fragment } from "react";

import { stack } from "@/app/content";
import { Section } from "@/app/components/Section";

export default function Stack() {
  return (
    <Section
      id="stack"
      num="03 -"
      title="Stack"
      sub="Deep in a few, comfortable across many."
    >
      <dl className="flex flex-col">
        {stack.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[150px_1fr] gap-6 py-4 border-t border-border first:border-t-0 print:break-inside-avoid"
          >
            <dt className="text-xs tracking-[0.1em] uppercase text-accent pt-[2px]">
              {row.label}
            </dt>
            <dd className="text-[15px] leading-[1.9]">
              {row.items.map((item, i) => (
                <Fragment key={item}>
                  {i > 0 && <span className="text-faint"> · </span>}
                  <span className={row.emphasis ? "text-foreground" : "text-muted"}>
                    {item}
                  </span>
                </Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
