import { Brain, Heart, Shield, Droplet, Moon, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import boysHealthImg from "@/assets/boys-health.jpg";

const topics = [
  {
    icon: Moon,
    title: "Nightfall (Wet Dreams)",
    color: "from-blue-500 to-purple-500",
    content: [
      "Nightfall or nocturnal emissions are completely normal and natural",
      "They occur due to hormonal changes during puberty and sexual maturity",
      "Usually happens during REM sleep and is the body's way of releasing built-up semen",
      "Not a sign of illness or weakness - it's a healthy bodily function",
      "Frequency varies from person to person and may decrease with age",
      "Good sleep hygiene and stress management can help regulate occurrences"
    ],
    tips: [
      "Maintain regular sleep schedule",
      "Avoid heavy meals before bedtime",
      "Practice relaxation techniques",
      "Wear comfortable, breathable clothing",
      "Don't feel ashamed - it's natural and common"
    ]
  },
  {
    icon: Activity,
    title: "Masturbation & Sexual Health",
    color: "from-purple-500 to-pink-500",
    content: [
      "Masturbation is a normal, healthy part of sexuality for most people",
      "It's a safe way to explore your body and understand sexual responses",
      "Does not cause physical harm, weakness, or health problems",
      "Can help reduce stress and improve sleep quality",
      "Practice good hygiene before and after",
      "It's a personal choice - there's no 'right' frequency"
    ],
    tips: [
      "Ensure privacy and comfortable environment",
      "Wash hands before and after",
      "Use appropriate lubrication if needed",
      "Don't feel guilty - it's natural",
      "If it interferes with daily life, consider talking to a counselor"
    ]
  },
  {
    icon: Shield,
    title: "Sexual Health & Safety",
    color: "from-teal-500 to-blue-500",
    content: [
      "Always use protection (condoms) during sexual activity",
      "Consent is mandatory - both people must agree willingly",
      "Get regular STI testing if sexually active",
      "Understand contraception options and discuss with partners",
      "Communication with partners about boundaries is essential",
      "Respect yourself and your partner's choices always"
    ],
    tips: [
      "Keep condoms accessible and check expiry dates",
      "Learn proper condom usage",
      "Get vaccinated for HPV if eligible",
      "Have honest conversations about sexual health",
      "Know that you can say no at any time"
    ]
  },
  {
    icon: Droplet,
    title: "Hygiene & Personal Care",
    color: "from-cyan-500 to-teal-500",
    content: [
      "Daily washing of genital area with mild soap and water",
      "Clean underwear daily - choose breathable cotton fabrics",
      "Trim pubic hair if desired, but it's not medically necessary",
      "Foreskin (if uncircumcised) should be gently pulled back and cleaned",
      "Shower after exercise or physical activity",
      "See a doctor if you notice unusual discharge, odor, or pain"
    ],
    tips: [
      "Wash daily with gentle, unscented soap",
      "Dry thoroughly to prevent fungal infections",
      "Change wet clothes or swimwear promptly",
      "Wear loose-fitting clothes when possible",
      "Don't use harsh chemicals or perfumes on genital area"
    ]
  },
  {
    icon: Brain,
    title: "Emotional & Mental Health",
    color: "from-indigo-500 to-purple-500",
    content: [
      "Hormonal changes during puberty affect mood and emotions",
      "Sexual thoughts and feelings are normal parts of development",
      "Peer pressure about sexual activity is common - make your own choices",
      "Pornography can create unrealistic expectations about sex",
      "It's okay to talk about concerns with trusted adults or counselors",
      "Mental health is as important as physical health"
    ],
    tips: [
      "Find healthy outlets for stress (exercise, hobbies)",
      "Talk to someone if you're feeling confused or pressured",
      "Don't compare yourself to others",
      "Set boundaries that feel right for you",
      "Seek professional help if struggling with anxiety or depression"
    ]
  },
  {
    icon: Heart,
    title: "Common Issues & When to Seek Help",
    color: "from-rose-500 to-pink-500",
    content: [
      "Premature ejaculation is common and often improves with time",
      "Erectile difficulties can happen due to stress, anxiety, or fatigue",
      "Testicular pain or lumps should be checked by a doctor immediately",
      "Painful urination may indicate an infection needing treatment",
      "Excessive masturbation interfering with life may need counseling",
      "Body image concerns are valid - seek support if needed"
    ],
    tips: [
      "Self-examine testicles monthly for lumps",
      "Don't ignore persistent pain or unusual symptoms",
      "Remember that most issues are treatable",
      "Mental health professionals can help with sexual concerns",
      "Your health information is confidential with doctors"
    ]
  }
];

export default function BoysHealth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8 max-w-6xl">
        <div className="mb-8 rounded-2xl overflow-hidden shadow-glow">
          <img 
            src={boysHealthImg} 
            alt="Boys health and wellness education"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Boys' Sexual Health Guide</h1>
          <p className="text-muted-foreground text-lg">
            Honest, judgment-free information about your body and health
          </p>
        </header>

        <div className="space-y-6">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <Card key={idx} className="shadow-soft hover:shadow-glow transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${topic.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="info" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="info">Information</TabsTrigger>
                      <TabsTrigger value="tips">Practical Tips</TabsTrigger>
                    </TabsList>
                    <TabsContent value="info" className="space-y-2 mt-4">
                      {topic.content.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                          <p className="text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="tips" className="space-y-2 mt-4">
                      {topic.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                          <p className="text-sm leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Need More Help?</CardTitle>
            <CardDescription>
              Visit our Q&A section for specific questions or use the Chat feature for personalized guidance
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
