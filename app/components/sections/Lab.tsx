import { projects } from "@/app/content";
import { Section } from "@/app/components/Section";
import ProjectCard from "@/app/components/ProjectCard";

export default function Lab() {
  return (
    <Section
      id="project"
      num="05 -"
      title="From the Lab"
      sub="Where I keep my sense of humour."
    >
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
}
