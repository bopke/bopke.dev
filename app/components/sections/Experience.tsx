import { roles } from "@/app/content";
import { Section } from "@/app/components/Section";
import RoleEntry from "@/app/components/RoleEntry";

export default function Experience() {
  return (
    <Section
      id="experience"
      num="02 -"
      title="Selected Work"
      sub="Over six years, mostly backend."
    >
      <div className="flex flex-col">
        {roles.map((role) => (
          <RoleEntry key={`${role.company}-${role.when}`} {...role} />
        ))}
      </div>
    </Section>
  );
}
