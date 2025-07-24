import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Lightbulb, Target, ArrowRight } from "lucide-react";

const InspirationSection = () => {
  const inspirationalQuotes = [
    {
      text: "Le talent seul ne suffit pas. Il faut de la persévérance, de la discipline et une foi inébranlable en ses rêves.",
      author: "Ma conviction personnelle",
      category: "Persévérance"
    },
    {
      text: "Chaque échec est une leçon, chaque victoire est une motivation pour aller plus loin.",
      author: "Mon expérience",
      category: "Résilience"
    },
    {
      text: "L'important n'est pas d'où tu viens, mais où tu vas et comment tu t'y prends pour y arriver.",
      author: "Ma philosophie",
      category: "Ambition"
    }
  ];

  const motivationalThoughts = [
    {
      icon: Target,
      title: "Vise Toujours Plus Haut",
      message: "Ne te contente jamais du minimum. Tes rêves méritent tous tes efforts.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "La Passion Guide Tout",
      message: "Quand tu aimes ce que tu fais, les obstacles deviennent des opportunités.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Apprends Constamment",
      message: "Chaque jour est une chance d'apprendre quelque chose de nouveau sur toi-même.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const callToAction = {
    title: "Rejoins-moi dans cette aventure",
    subtitle: "Ensemble, nous pouvons surmonter tous les défis",
    description: "Si mon histoire peut inspirer ne serait-ce qu'une personne à poursuivre ses rêves malgré les difficultés, alors j'aurai réussi ma mission."
  };

  return (
    <section id="inspiration" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            <span className="text-gradient">Et maintenant ?</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground leading-relaxed animate-fade-in">
          <p className="text-lg">
            Mon rêve, c'est de jouer un jour dans un grand club, notamment <em>Manchester City</em>, dont je partage les valeurs. Je m'inspire de <strong>Phil Foden</strong> pour son courage, sa simplicité et son fair-play. Comme lui, je crois qu'on peut briller sans trahir qui l'on est.
          </p>
          
          <p className="text-lg">
            Je suis <em>prêt à tout donner</em>. Parce que le football, ce n'est pas juste ce que je fais. <strong>C'est ce que je suis.</strong>
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up">
          <Card className="card-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-bold mb-4">Rejoignez-moi dans cette aventure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suivez mon parcours et partageons ensemble cette passion pour le football
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Connectons-nous
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-fast" />
                </Button>
                <Button 
                  variant="outline" 
                  className="transition-fast hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Voir ma galerie
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;