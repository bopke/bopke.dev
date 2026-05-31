import { Section } from "@/app/components/Section";
import RoleEntry from "@/app/components/RoleEntry";

export default function Education() {
  return (
    <Section id="education" num="04 -" title="Education" sub="Where I studied.">
      <div>
        <RoleEntry
          title="Bachelor's degree, Information Technology"
          company="Technical University of Łódź"
          when="2017 - 2022"
          desc="Thesis: Using containers to isolate application runtime environments."
        />
      </div>
    </Section>
  );
}
