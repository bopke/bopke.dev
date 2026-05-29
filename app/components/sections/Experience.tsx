import { timeline } from "@/app/content";
import { Section } from "@/app/components/Section";
import RoleEntry from "@/app/components/RoleEntry";
import ContractGroup from "@/app/components/ContractGroup";

export default function Experience() {
  return (
    <Section
      id="experience"
      num="02 -"
      title="Selected Work"
      sub="Delivering great software since 2019."
    >
      <div className="flex flex-col">
        {timeline.map((entry) =>
          "group" in entry ? (
            <ContractGroup key={entry.group} {...entry} />
          ) : (
            <RoleEntry key={`${entry.company}-${entry.when}`} {...entry} />
          )
        )}
      </div>
    </Section>
  );
}
