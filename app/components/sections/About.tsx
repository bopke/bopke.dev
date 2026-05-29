import { Section } from "@/app/components/Section";

const para = "text-[clamp(16px,2vw,21px)] leading-[1.75] text-muted";
const strong = "text-foreground font-semibold";

export default function About() {
  return (
    <Section id="about" num="01 -" title="About" sub="Long story short.">
      <div className="space-y-[22px] max-w-[620px]">
        <p className={para}>
          I wrote my first line of code at <b className={strong}>12</b> and never
          really stopped. Since then I&apos;ve used a lot of languages and tools,
          enough that picking up a new one isn&apos;t a big deal anymore. I just
          go with whatever suits the problem.
        </p>
        <p className={para}>
          Most of my work is on the <b className={strong}>backend</b>: services,
          schemas, queues, and the integrations that hold everything together. I
          like the parts nobody sees:{" "}
          <b className={strong}>the query that ended up 3x cheaper</b>, the
          migration that didn&apos;t lose a row, the pipeline that catches a bug
          before it ships. I also have a soft spot for VR.
        </p>
        <p className={para}>
          It&apos;s not all backend, though. I&apos;ve worked on the frontend
          with React and React Native too.
        </p>
      </div>
    </Section>
  );
}
