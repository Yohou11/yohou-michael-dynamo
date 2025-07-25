import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  MessageSquare,
  Users,
  Briefcase,
  Heart
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai bientôt.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactReasons = [
    {
      icon: Briefcase,
      title: "Opportunités Professionnelles",
      description: "Clubs, recruteurs, agents sportifs",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Collaborations",
      description: "Partenariats, projets communautaires",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Mentorat",
      description: "Conseils pour jeunes footballeurs",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Motivation",
      description: "Partage d'expériences inspirantes",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-lighter/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Restons <span className="text-gradient">Connectés</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Que ce soit pour des opportunités professionnelles, des collaborations ou simplement 
            pour échanger sur la passion du football
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="card-elegant animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-playfair font-semibold">Envoyez-moi un message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nom complet</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="transition-fast focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="transition-fast focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sujet</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    required
                    className="transition-fast focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={6}
                    required
                    className="transition-fast focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button type="submit" className="btn-hero w-full group">
                  Envoyer le message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-fast" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Reasons */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {/* Contact Info */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-muted-foreground">Côte d'Ivoire</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@michaelyohou.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Disponibilité</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Disponible pour opportunités
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Reasons */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-semibold mb-6">Pourquoi me contacter ?</h3>
                <div className="space-y-4">
                  {contactReasons.map((reason, index) => (
                    <div 
                      key={reason.title}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-fast"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <reason.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{reason.title}</h4>
                        <p className="text-muted-foreground text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center animate-fade-in">
          <blockquote className="text-xl lg:text-2xl font-playfair italic text-slate-light mb-4">
            "Ensemble, nous pouvons transformer les rêves en réalité et les défis en opportunités."
          </blockquote>
          <cite className="text-primary font-semibold">— N'Guessan Yohou Michael</cite>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;