import type { Group } from "@/app/content";
import RoleEntry from "@/app/components/RoleEntry";

export default function ContractGroup({ group, when, blurb, roles }: Group) {
  return (
    <article className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-[6px] py-[26px] border-t border-border first:border-t-0 first:pt-0 print:break-inside-avoid">
      <h3 className="text-[19px] font-semibold tracking-[-0.01em]">{group}</h3>
      <div className="text-[12.5px] text-faint text-right whitespace-nowrap max-[760px]:text-left">
        {when}
      </div>
      <p className="col-span-full text-sm text-faint leading-[1.7] mt-2 italic">
        {blurb}
      </p>
      <div className="col-span-full mt-3 pl-5 border-l border-border flex flex-col">
        {roles.map((role) => (
          <RoleEntry key={`${role.company}-${role.when}`} {...role} />
        ))}
      </div>
    </article>
  );
}
