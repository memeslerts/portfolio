
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navigation = [
  { name: "About", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-semibold whitespace-nowrap">
            Mimi Pichsinee Lertsaroj
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium relative px-1 py-2 transition-colors whitespace-nowrap",
                location.pathname === item.href
                  ? "text-foreground after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            asChild 
            className="ml-2"
          >
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              CV
            </a>
          </Button>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
