import { ResourceCard } from "./ResourceCard";
import type { Section } from "@/lib/types";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ResourceSectionProps {
  section: Section;
  filter: string;
}

export function ResourceSection({ section, filter }: ResourceSectionProps) {
  const IconComponent = Icons[section.icon as keyof typeof Icons] as LucideIcon;
  const filteredResources = section.resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(filter.toLowerCase()) ||
      resource.description.toLowerCase().includes(filter.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  if (filter && filteredResources.length === 0) {
    return null;
  }

  return (
    <section
      id={section.id}
      className="py-16"
      style={{
        backgroundColor: `${section.color}10`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          {IconComponent && (
            <IconComponent className="h-8 w-8" style={{ color: section.color }} />
          )}
          <div>
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <p className="text-muted-foreground">{section.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.url} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}