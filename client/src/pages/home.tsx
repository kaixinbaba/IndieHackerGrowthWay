import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import { ResourceSection } from "@/components/ResourceSection";
import { LanguageSelector } from "@/components/LanguageSelector";
import type { ResourcesData } from "@/lib/types";
import { loadResources, translations } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const [searchFilter, setSearchFilter] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const { data: resourcesData, isLoading } = useQuery<ResourcesData>({
    queryKey: ['/resources', language],
    queryFn: () => loadResources(language)
  });

  if (isLoading || !resourcesData) {
    return <div className="min-h-screen flex items-center justify-center">{t.loading}</div>;
  }

  const { sections } = resourcesData;

  return (
    <div className="min-h-screen">
      <Navigation sections={sections.map(({ id, title }) => ({ id, title }))} />

      <main className="pt-24">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {t.siteTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.siteDescription}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <SearchBar value={searchFilter} onChange={setSearchFilter} placeholder={t.searchPlaceholder} />
            <LanguageSelector />
          </div>
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