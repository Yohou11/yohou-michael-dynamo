import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Trophy, Star } from "lucide-react";

const JourneySection = () => {
  const milestones = [
    {
      year: "Début",
      title: "Les Premiers Pas",
      location: "Côte d'Ivoire",
      description: "Mes premiers contacts avec le ballon, l'éveil d'une passion qui allait définir ma vie.",
      achievements: ["Premier ballon", "Passion née"],
      highlight: true
    },
    {
      year: "Formation",
      title: "Intégration en Académie",
      location: "Académie de Football",
      description: "Intégration dans une académie professionnelle, début de la formation technique et tactique.",
      achievements: ["Formation technique", "Développement tactique", "Discipline sportive"]
    },
    {
      year: "Présent",
      title: "Évolution Continue",
      location: "Académie de Football",
      description: "Perfectionnement constant des compétences, participation à des compétitions et préparation pour l'avenir.",
      achievements: ["Compétitions", "Leadership", "Mentorat"]
    },
    {
      year: "Futur",
      title: "Ambitions Professionnelles",
      location: "À déterminer",
      description: "Objectif de rejoindre une équipe professionnelle et de représenter mon pays au plus haut niveau.",
      achievements: ["Football professionnel", "Équipe nationale", "Inspiration"],
      future: true
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
            Un voyage fait de détermination, d'apprentissage constant et de passion pour le football
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative animate-slide-up flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className={`card-elegant ${milestone.highlight ? 'ring-2 ring-primary/50' : ''} ${milestone.future ? 'border-dashed border-primary/50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant={milestone.highlight ? "default" : milestone.future ? "secondary" : "outline"}
                          className={milestone.highlight ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" : ""}
                        >
                          {milestone.year}
                        </Badge>
                        {milestone.highlight && <Star className="w-5 h-5 text-primary" />}
                      </div>

                      <h3 className="text-xl font-playfair font-semibold mb-3">{milestone.title}</h3>
                      
                      <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{milestone.location}</span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {milestone.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-primary" />
                          {milestone.future ? "Objectifs" : "Réalisations"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {milestone.achievements.map((achievement) => (
                            <Badge key={achievement} variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-playfair italic text-slate-light mb-6">
              "Chaque obstacle surmonté me rapproche de mes rêves. Le football m'a appris que 
              la persévérance et la passion peuvent transformer n'importe quel défi en opportunité."
            </blockquote>
            <cite className="text-primary font-semibold">— N'Guessan Yohou Michael</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;