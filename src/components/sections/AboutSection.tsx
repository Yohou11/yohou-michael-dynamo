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
            <span className="text-gradient">À Propos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un parcours unique façonné par la passion, la détermination et l'amour du football
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Content */}
          <div className="animate-slide-up">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Je m'appelle <em>Mickael Yohou</em>, né le <strong>10 mai 2007</strong> à <em>Guibéroua</em>, une petite ville paisible de Côte d'Ivoire. Le <strong>football</strong>, pour moi, n'est pas un simple jeu. C'est une passion qui me fait vibrer depuis que j'ai appris à courir. Quand je suis sur le terrain, je me sens libre, vivant, et en parfaite harmonie avec moi-même. Chaque ballon touché, chaque course, chaque but me rapproche un peu plus de <strong>qui je suis vraiment</strong>.
              </p>
              <p>
                J'aime ce sport parce qu'il me donne une <em>force intérieure</em>, me pousse à me surpasser, à ne jamais abandonner. Il m'apprend le respect, la discipline, l'humilité, et surtout, l'esprit d'équipe. Le football est devenu <strong>mon langage, ma thérapie, mon rêve en mouvement</strong>.
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