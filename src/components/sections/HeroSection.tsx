import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Côte d'Ivoire</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold mb-6">
              <span className="text-gradient">N'Guessan</span><br />
              <span className="text-foreground">Yohou Michael</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Footballeur passionné et déterminé. Mon parcours est un témoignage de résilience 
              et de persévérance face aux défis de la vie. Je partage mon histoire pour inspirer 
              et motiver la nouvelle génération.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                className="btn-hero"
                onClick={() => scrollToSection('apropos')}
              >
                Découvrir mon histoire
              </Button>
              <Button 
                variant="outline" 
                className="transition-fast hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('contact')}
              >
                Me contacter
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Académie de Football</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Actif</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-smooth"></div>
              <img
                src="/lovable-uploads/db6e5574-9cdb-477a-9e95-3ccf69f79749.png"
                alt="N'Guessan Yohou Michael - Portrait professionnel"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transition-smooth group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-6 h-6 text-primary cursor-pointer" 
          onClick={() => scrollToSection('apropos')}
        />
      </div>
    </section>
  );
};

export default HeroSection;