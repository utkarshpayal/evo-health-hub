import { BookOpen, Heart, Brain, Shield, Users, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import wellnessImg from "@/assets/wellness.jpg";

const topics = [
  {
    icon: Heart,
    title: "Understanding Your Body",
    description: "Learn about reproductive health, hormones, and your menstrual cycle",
    content: [
      "The menstrual cycle is controlled by hormones and typically lasts 21-35 days",
      "Your cycle has four phases: menstruation, follicular, ovulation, and luteal",
      "Every body is different - tracking helps you understand your unique patterns",
      "Hormonal changes affect mood, energy, skin, and appetite throughout your cycle"
    ]
  },
  {
    icon: Shield,
    title: "Safe Practices",
    description: "Essential information about protection and contraception",
    content: [
      "Always use barrier protection to prevent STIs and unplanned pregnancy",
      "Many contraceptive options exist - find what works best for your body and lifestyle",
      "Regular STI testing is important for anyone who is sexually active",
      "Consent is essential - you have the right to say no at any time"
    ]
  },
  {
    icon: Brain,
    title: "Emotional Wellness",
    description: "Mental health, relationships, and self-care during your cycle",
    content: [
      "Mood changes during your cycle are normal due to hormone fluctuations",
      "Self-care practices like exercise, sleep, and nutrition support emotional health",
      "It's okay to set boundaries and take time for yourself when needed",
      "If you're experiencing severe mood changes, talk to a healthcare provider"
    ]
  },
  {
    icon: Users,
    title: "Healthy Relationships",
    description: "Communication, respect, and boundaries in relationships",
    content: [
      "Open communication about needs, boundaries, and expectations is vital",
      "Healthy relationships are built on mutual respect, trust, and support",
      "You have the right to make your own choices about your body and health",
      "Red flags include controlling behavior, pressure, or lack of respect for boundaries"
    ]
  }
];

const myths = [
  {
    myth: "You can't get pregnant during your period",
    fact: "While less likely, pregnancy is still possible during menstruation, especially with shorter cycles."
  },
  {
    myth: "PMS is just 'in your head'",
    fact: "PMS is a real medical condition caused by hormonal changes that affect physical and emotional health."
  },
  {
    myth: "Tampons can get lost inside you",
    fact: "This is impossible. The cervix blocks the path, so tampons can't go beyond the vaginal canal."
  },
  {
    myth: "You shouldn't exercise during your period",
    fact: "Exercise can actually help reduce cramps and improve mood during menstruation."
  }
];

export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8 max-w-6xl">
        <div className="mb-8 rounded-2xl overflow-hidden shadow-glow">
          <img 
            src={wellnessImg} 
            alt="Wellness and health education"
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Health Education</h1>
          <p className="text-muted-foreground">Evidence-based information to empower your health journey</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link to="/girls-health">
            <Card className="shadow-soft hover:shadow-glow transition-all cursor-pointer group h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Girls' Health Guide
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>
                  Comprehensive guide covering periods, hygiene, sexual health, and common concerns
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/boys-health">
            <Card className="shadow-soft hover:shadow-glow transition-all cursor-pointer group h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Boys' Health Guide
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>
                  Essential information about nightfall, masturbation, hygiene, and sexual wellness
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <Tabs defaultValue="topics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="myths">Myths vs Facts</TabsTrigger>
          </TabsList>

          <TabsContent value="topics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {topics.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <Card key={idx} className="shadow-soft hover:shadow-glow transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>{topic.title}</CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {topic.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="myths" className="space-y-4">
            {myths.map((item, idx) => (
              <Card key={idx} className="shadow-soft">
                <CardHeader>
                  <div className="space-y-4">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold mb-2">
                        MYTH
                      </div>
                      <p className="font-medium text-muted-foreground">{item.myth}</p>
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-2">
                        FACT
                      </div>
                      <p className="font-medium">{item.fact}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Want to Learn More?
                </CardTitle>
                <CardDescription>
                  Check out our Q&A section for detailed answers to common questions, or chat with us for personalized information.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
