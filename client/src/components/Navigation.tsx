import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation({ sections }: { sections: { id: string; title: string }[] }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold">IndieHackerGrowthWay</div>
            <div className="flex gap-4">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {showBackToTop && (
        <Button
          className="fixed bottom-8 right-8 rounded-full p-3"
          onClick={scrollToTop}
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
