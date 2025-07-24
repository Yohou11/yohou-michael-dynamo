import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, User, Trophy, Camera, Heart, MessageSquare } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", href: "#accueil", icon: Home },
    { name: "À Propos", href: "#apropos", icon: User },
    { name: "Parcours", href: "#parcours", icon: Trophy },
    { name: "Galerie", href: "#galerie", icon: Camera },
    { name: "Inspiration", href: "#inspiration", icon: Heart },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  const NavContent = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-foreground hover:text-primary transition-fast font-medium flex items-center gap-2 lg:justify-center"
        >
          <item.icon className="w-4 h-4 lg:hidden" />
          {item.name}
        </a>
      ))}
    </>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#accueil" className="font-playfair text-2xl font-bold text-gradient">
            Michael Yohou
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavContent />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;