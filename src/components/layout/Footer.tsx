import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold mb-2">Michael Yohou</h3>
            <p className="text-primary-foreground/80">
              Footballeur passionné & Source d'inspiration
            </p>
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="italic text-primary-foreground/90">
              "Chaque rêve mérite d'être poursuivi avec passion"
            </p>
          </div>

          {/* Back to top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-slate"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Retour en haut
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            © {currentYear} N'Guessan Yohou Michael. Créé avec 
            <Heart className="w-4 h-4 text-red-400" />
            et passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;