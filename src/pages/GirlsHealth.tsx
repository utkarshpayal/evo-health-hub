import { Flower2, Heart, Shield, Droplets, Sparkles, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import girlsHealthImg from "@/assets/girls-health.jpg";

const topics = [
  {
    icon: Droplets,
    title: "Menstrual Hygiene & Care",
    color: "from-pink-500 to-rose-500",
    content: [
      "Change pads every 4-6 hours and tampons every 4-8 hours",
      "Always wash hands before and after changing menstrual products",
      "Use unscented products to avoid irritation and infections",
      "Dispose of used products wrapped in paper, never flush tampons",
      "Track your cycle to understand your body's patterns",
      "Shower daily during period and wash intimate area with water"
    ],
    tips: [
      "Keep emergency supplies in your bag",
      "Wear dark or patterned underwear during periods",
      "Use overnight pads with wings for better protection",
      "Consider menstrual cups or period underwear as alternatives",
      "Stay hydrated and maintain iron-rich diet during periods"
    ]
  },
  {
    icon: Activity,
    title: "Sexual Health & Wellness",
    color: "from-purple-500 to-pink-500",
    content: [
      "Masturbation is natural, healthy, and safe for self-exploration",
      "Understanding your body helps with better sexual health",
      "Always use protection during sexual activity to prevent STIs and pregnancy",
      "Consent is essential - you have the right to say no anytime",
      "Regular gynecological check-ups are important after becoming sexually active",
      "Pain during sex is not normal - consult a healthcare provider"
    ],
    tips: [
      "Learn about different contraception options",
      "Communicate openly with partners about boundaries",
      "Get HPV vaccination if eligible",
      "Practice safe sex consistently",
      "Know that your pleasure and comfort matter"
    ]
  },
  {
    icon: Shield,
    title: "Intimate Hygiene Practices",
    color: "from-teal-500 to-cyan-500",
    content: [
      "Wash intimate area with plain water or mild, unscented soap",
      "Always wipe front to back to prevent infections",
      "Vagina is self-cleaning - avoid douching or internal washing",
      "Wear cotton underwear that allows skin to breathe",
      "Change out of wet clothes or swimwear promptly",
      "White or clear discharge is normal; see doctor for unusual changes"
    ],
    tips: [
      "Don't use scented products or harsh soaps on intimate areas",
      "Change underwear daily and after exercising",
      "Avoid tight clothing for extended periods",
      "Sleep without underwear occasionally to allow air circulation",
      "Keep intimate area dry to prevent fungal infections"
    ]
  },
  {
    icon: Flower2,
    title: "Common Issues & Solutions",
    color: "from-violet-500 to-purple-500",
    content: [
      "Vaginal itching can be caused by infections, allergies, or irritation",
      "Yeast infections are common and treatable with medication",
      "UTIs need medical attention - don't ignore painful urination",
      "Irregular periods in first 2 years after menarche are normal",
      "PCOS, endometriosis, and fibroids are manageable with proper care",
      "Painful cramps that disrupt daily life may need medical evaluation"
    ],
    tips: [
      "Urinate after sexual activity to prevent UTIs",
      "Probiotics and yogurt can help maintain vaginal health",
      "Track symptoms to share with healthcare provider",
      "Don't self-diagnose - get proper medical consultation",
      "Keep intimate area clean but not over-cleaned"
    ]
  },
  {
    icon: Heart,
    title: "Emotional & Mental Health",
    color: "from-rose-500 to-pink-500",
    content: [
      "Hormonal changes affect mood throughout your cycle",
      "PMS and PMDD are real conditions requiring support",
      "Body image concerns during puberty are common and normal",
      "Peer pressure about sexual activity - make choices that feel right",
      "Sexual thoughts and feelings are healthy parts of development",
      "Seek help if you feel overwhelmed, anxious, or depressed"
    ],
    tips: [
      "Practice self-care during difficult days of your cycle",
      "Find trusted adults or counselors to talk with",
      "Exercise and healthy diet support mental wellbeing",
      "Don't compare your body or cycle to others",
      "Remember that you're in control of your choices"
    ]
  },
  {
    icon: Sparkles,
    title: "When to See a Doctor",
    color: "from-amber-500 to-orange-500",
    content: [
      "Period hasn't started by age 16",
      "Severe pain that prevents daily activities",
      "Very heavy bleeding (soaking through pad/tampon in 1-2 hours)",
      "Unusual vaginal discharge with odor or color changes",
      "Persistent itching, burning, or rashes",
      "Irregular bleeding or spotting between periods after 2 years of menstruation"
    ],
    tips: [
      "Don't feel embarrassed - doctors are professionals",
      "Write down symptoms to discuss clearly",
      "Your medical information is confidential",
      "Bring a trusted adult if it makes you comfortable",
      "Early consultation prevents complications"
    ]
  }
];

export default function GirlsHealth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8 max-w-6xl">
        <div className="mb-8 rounded-2xl overflow-hidden shadow-glow">
          <img 
            src={girlsHealthImg} 
            alt="Girls health and wellness education"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Girls' Sexual Health Guide</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive, judgment-free information about your body and wellbeing
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
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                          <p className="text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="tips" className="space-y-2 mt-4">
                      {topic.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-accent/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
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
