import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Trophy, Star } from "lucide-react";

const JourneySection = () => {
  const clubs = [
    {
      year: "2021",
      name: "Ginette Roose – Issia",
      period: "(2021)"
    },
    {
      year: "2022",
      name: "Union Foot – Gagnoa",
      period: "(2022)"
    },
    {
      year: "2022–2024",
      name: "Brou Don Koffi – Gagnoa",
      period: "(2022–2024)"
    }
  ];

  return (
    <section id="parcours" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Mon <span className="text-gradient">Parcours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mon évolution dans le monde du football, de mes débuts à aujourd'hui
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground leading-relaxed animate-fade-in">
          <p>
            Après mes études, je suis revenu à Guibéroua. Ma grand-mère m'a parlé d'un club local. J'ai saisi cette chance comme une seconde naissance dans ma carrière. Pendant <em>plus d'un an</em>, je me suis battu pour gagner ma place. Puis, à <strong>15 ans</strong>, <strong>Athlético Club de Guibéroua (A.C.G)</strong> m'a offert ma première vraie licence de joueur. <em>C'était officiel : j'étais un joueur de club.</em>
          </p>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-foreground">Depuis, mon chemin s'est enrichi :</h3>
            <div className="grid gap-4">
              {clubs.map((club, index) => (
                <Card key={index} className="card-elegant animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-accent/10">
                        {club.year}
                      </Badge>
                      <div>
                        <h4 className="font-semibold text-foreground">{club.name}</h4>
                        <p className="text-sm text-muted-foreground">{club.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <p>
            ...et d'autres clubs qui ont forgé mon jeu, mon mental, ma vision.
          </p>

          <p>
            Chacune de ces étapes a été une <em>école de vie</em>, chaque coéquipier un frère, chaque coach un mentor. Je me suis battu, j'ai appris, j'ai grandi. Je suis devenu plus qu'un joueur : <strong>je suis un passionné, un combattant, un rêveur lucide</strong>.
          </p>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-playfair italic text-slate-light mb-6">
              "Chaque étape de mon parcours m'a appris quelque chose d'essentiel. 
              Le football n'est pas seulement un sport, c'est une école de vie qui forge le caractère."
            </blockquote>
            <cite className="text-primary font-semibold">— Mickael Yohou</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;