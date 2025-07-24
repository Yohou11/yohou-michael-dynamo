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
            Sources d'<span className="text-gradient">Inspiration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des pensées, des réflexions et des messages pour motiver et inspirer
          </p>
        </div>

        {/* Inspirational Quotes */}
        <div className="mb-20">
          <h3 className="text-2xl font-playfair font-semibold text-center mb-12">Mes Réflexions</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {inspirationalQuotes.map((quote, index) => (
              <Card 
                key={index}
                className="card-elegant animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {quote.category}
                      </Badge>
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-slate-light mb-4 leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                  <cite className="text-primary font-medium">— {quote.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Motivational Thoughts */}
        <div className="mb-20">
          <h3 className="text-2xl font-playfair font-semibold text-center mb-12">Messages de Motivation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {motivationalThoughts.map((thought, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden animate-fade-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${thought.color} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${thought.color} rounded-xl flex items-center justify-center mb-4`}>
                    <thought.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-playfair font-semibold mb-3">{thought.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{thought.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <Card className="card-elegant max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="mb-6">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-playfair font-bold mb-4">{callToAction.title}</h3>
                <p className="text-xl text-primary mb-6">{callToAction.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                  {callToAction.description}
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

        {/* Achievement Highlight */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Objectifs", subtitle: "Toujours plus hauts" },
            { icon: Heart, title: "Passion", subtitle: "Sans limites" },
            { icon: Lightbulb, title: "Innovation", subtitle: "Esprit créatif" },
            { icon: Quote, title: "Inspiration", subtitle: "Pour tous" }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="text-center group animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-playfair font-semibold mb-1">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;