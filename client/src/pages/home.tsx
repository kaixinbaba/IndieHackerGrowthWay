import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import { ResourceSection } from "@/components/ResourceSection";
import type { ResourcesData } from "@/lib/types";
import { loadResources } from "@/lib/utils";

export default function Home() {
  const [searchFilter, setSearchFilter] = useState("");

  const { data: resourcesData, isLoading } = useQuery<ResourcesData>({
    queryKey: ['/resources'],
    queryFn: loadResources
  });

  if (isLoading || !resourcesData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const { sections } = resourcesData;

  return (
    <div className="min-h-screen">
      <Navigation sections={sections.map(({ id, title }) => ({ id, title }))} />

      <main className="pt-24">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              IndieHackerGrowthWay
            </h1>
            <p className="text-xl text-muted-foreground">
              A curated directory of resources for every stage of your indie hacker journey
            </p>
          </div>

          <SearchBar value={searchFilter} onChange={setSearchFilter} />
        </div>

        {sections.map((section) => (
          <ResourceSection
            key={section.id}
            section={section}
            filter={searchFilter}
          />
        ))}
      </main>
    </div>
  );
}