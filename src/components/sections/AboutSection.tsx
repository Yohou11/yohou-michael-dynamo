import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Ambition",
      description: "Viser toujours plus haut et ne jamais abandonner ses rêves, peu importe les obstacles."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Le football est plus qu'un sport, c'est ma vie, mon essence et ma plus grande source de motivation."
    },
    {
      icon: Zap,
      title: "Résilience",
      description: "Transformer chaque défi en opportunité de croissance et chaque échec en leçon de vie."
    },
    {
      icon: Users,
      title: "Inspiration",
      description: "Partager mon parcours pour motiver d'autres jeunes à poursuivre leurs rêves avec détermination."
    }
  ];

  return (
    <section id="apropos" className="section-padding bg-slate-lighter/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            À Propos de <span className="text-gradient">Moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un parcours unique façonné par la passion, la détermination et l'amour du football
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-playfair font-semibold mb-6">Mon Histoire</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Je suis N'Guessan Yohou Michael, un jeune footballeur passionné de Côte d'Ivoire. 
                Mon parcours dans le football a commencé très tôt, avec des rêves plein la tête 
                et une détermination sans faille.
              </p>
              <p>
                Aujourd'hui, j'évolue dans une académie de football où je perfectionne mes 
                compétences chaque jour. Mon objectif n'est pas seulement de réussir 
                personnellement, mais aussi d'inspirer d'autres jeunes à croire en leurs rêves.
              </p>
              <p>
                Ce site web est bien plus qu'une vitrine : c'est un témoignage de résilience, 
                de persévérance et de foi en l'avenir. Chaque challenge que j'ai surmonté 
                m'a rendu plus fort et plus déterminé à atteindre mes objectifs.
              </p>
            </div>
          </div>

          {/* Football Image */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-smooth"></div>
              <img
                src="/lovable-uploads/690abfc3-03f2-433c-ab1d-e876a17af7d5.png"
                alt="N'Guessan Yohou Michael en action sur le terrain"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transition-smooth group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="card-elegant animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-lg font-playfair font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;