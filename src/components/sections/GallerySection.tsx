import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Play, Image as ImageIcon } from "lucide-react";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/lovable-uploads/690abfc3-03f2-433c-ab1d-e876a17af7d5.png",
      title: "Sur le Terrain",
      description: "En action lors d'un match à l'académie",
      category: "football"
    },
    {
      id: 2,
      type: "image", 
      src: "/lovable-uploads/db6e5574-9cdb-477a-9e95-3ccf69f79749.png",
      title: "Portrait Professionnel",
      description: "Portrait officiel en tenue de cérémonie",
      category: "portrait"
    },
    {
      id: 3,
      type: "placeholder",
      src: "photo-1470813740244-df37b8c1edcb",
      title: "Ciel Étoilé",
      description: "Inspiration et ambitions sous les étoiles",
      category: "inspiration"
    },
    {
      id: 4,
      type: "placeholder",
      src: "photo-1581090464777-f3220bbe1b8b",
      title: "Innovation",
      description: "Toujours à la recherche de nouvelles idées",
      category: "inspiration"
    },
    {
      id: 5,
      type: "placeholder",
      src: "photo-1615729947596-a598e5de0ab3",
      title: "Le Chemin",
      description: "Le parcours vers l'excellence",
      category: "inspiration"
    },
    {
      id: 6,
      type: "placeholder",
      src: "photo-1486312338219-ce68d2c6f44d",
      title: "Technologie",
      description: "L'ère numérique du football moderne",
      category: "lifestyle"
    }
  ];

  const categories = [
    { id: "all", name: "Tout", icon: ImageIcon },
    { id: "football", name: "Football", icon: Play },
    { id: "portrait", name: "Portraits", icon: Camera },
    { id: "inspiration", name: "Inspiration", icon: ImageIcon },
    { id: "lifestyle", name: "Lifestyle", icon: Camera }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getImageSrc = (item: any) => {
    if (item.type === "placeholder") {
      return `https://images.unsplash.com/${item.src}?q=80&w=800&auto=format&fit=crop`;
    }
    return item.src;
  };

  return (
    <section id="galerie" className="section-padding bg-slate-lighter/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Ma <span className="text-gradient">Galerie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des moments qui racontent mon histoire, ma passion et mon parcours
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-fast ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card 
                  className="card-elegant cursor-pointer group animate-fade-in overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={getImageSrc(item)}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-slate">
                          {item.type === "image" ? "Photo" : "Inspiration"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <img
                    src={getImageSrc(item)}
                    alt={item.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-playfair font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "100+", label: "Photos de parcours" },
            { number: "50+", label: "Matchs joués" },
            { number: "3", label: "Années d'académie" },
            { number: "∞", label: "Rêves à réaliser" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl lg:text-4xl font-playfair font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;