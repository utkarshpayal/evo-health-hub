import { Search, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navigation from "@/components/Navigation";

const faqs = [
  {
    category: "Period Basics (Girls)",
    questions: [
      {
        q: "What is a normal period length?",
        a: "A typical period lasts 3-7 days, with an average of 5 days. Flow is usually heavier in the first few days and lighter towards the end. If your period regularly lasts longer than 7 days or is very short, consider talking to a healthcare provider."
      },
      {
        q: "How much bleeding is normal?",
        a: "On average, people lose about 2-3 tablespoons of blood during their period. You should change pads/tampons every 4-8 hours. If you're soaking through products every 1-2 hours, that's considered heavy bleeding and you should consult a doctor."
      },
      {
        q: "How should I maintain menstrual hygiene?",
        a: "Change pads every 4-6 hours, tampons every 4-8 hours. Always wash hands before and after. Use unscented products. Shower daily during periods and wash intimate area with plain water or mild soap. Dispose of products properly, never flush them."
      }
    ]
  },
  {
    category: "Boys' Health",
    questions: [
      {
        q: "What is nightfall (wet dreams) and is it normal?",
        a: "Nightfall or nocturnal emissions are completely normal and healthy. They occur due to hormonal changes during puberty when your body releases built-up semen during sleep. It's not a sign of illness or weakness, and frequency varies from person to person. Good sleep hygiene can help regulate occurrences."
      },
      {
        q: "Is masturbation harmful?",
        a: "No, masturbation is a normal, healthy part of sexuality. It's a safe way to explore your body and doesn't cause physical harm, weakness, or health problems. Practice good hygiene before and after. If it interferes with daily life, consider talking to a counselor, but otherwise it's a healthy personal choice."
      },
      {
        q: "How do I maintain proper hygiene?",
        a: "Wash genital area daily with mild soap and water. Wear clean cotton underwear daily. If uncircumcised, gently pull back foreskin and clean. Shower after exercise. Trim pubic hair if desired but it's not medically necessary. See a doctor if you notice unusual discharge, odor, or pain."
      }
    ]
  },
  {
    category: "Cycle Health",
    questions: [
      {
        q: "Why is my cycle irregular?",
        a: "Irregular cycles can be caused by stress, weight changes, exercise, hormonal imbalances, or medical conditions like PCOS. Some irregularity is normal, especially in the first few years after your period starts or as you approach menopause."
      },
      {
        q: "Can I get pregnant during my period?",
        a: "While less likely, it's possible to get pregnant during your period, especially if you have a shorter cycle. Sperm can survive in your body for up to 5 days, so if you ovulate early, pregnancy is possible."
      }
    ]
  },
  {
    category: "Sexual Health (All)",
    questions: [
      {
        q: "What are the different types of contraception?",
        a: "Common methods include barrier methods (condoms), hormonal methods (pills, patches, IUDs), emergency contraception, and natural family planning. Each has different effectiveness rates and side effects. Condoms are the only method that also protect against STIs. Consult healthcare provider to find what works best for you."
      },
      {
        q: "How can I protect myself from STIs?",
        a: "Use barrier protection (condoms) consistently, get regular STI testing, limit sexual partners, and have open conversations about sexual health with partners. Get vaccinated for HPV if eligible. Remember that many STIs show no symptoms, so testing is important even if you feel healthy."
      },
      {
        q: "What is consent and why is it important?",
        a: "Consent means freely agreeing to sexual activity without pressure, threats, or manipulation. Both people must clearly agree and can change their mind at any time. Consent is mandatory - you have the right to say no whenever you feel uncomfortable, and you must respect others' boundaries too."
      },
      {
        q: "Is it normal to have sexual thoughts during puberty?",
        a: "Yes, sexual thoughts and feelings are a completely normal part of development during puberty. Hormonal changes cause increased sexual awareness. These feelings are natural for both boys and girls. What matters is learning about healthy sexuality, boundaries, and respect."
      }
    ]
  },
  {
    category: "Symptoms & Relief",
    questions: [
      {
        q: "How can I manage period cramps?",
        a: "Try over-the-counter pain relief (ibuprofen), heating pads, gentle exercise, staying hydrated, and getting enough sleep. Some people find relief from yoga, acupuncture, or dietary changes. If cramps are severe and interfere with daily life, see a doctor."
      },
      {
        q: "What causes PMS and how can I manage it?",
        a: "PMS is caused by hormonal changes before your period. Symptoms include mood changes, fatigue, and bloating. Management includes regular exercise, balanced diet, adequate sleep, stress reduction, and in some cases, supplements or medication."
      }
    ]
  }
];

export default function QnA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Questions & Answers</h1>
          <p className="text-muted-foreground">Find answers to common questions about sexual health and periods</p>
        </header>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              className="pl-10 h-12 bg-card border-border"
            />
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((category) => (
            <Card key={category.category} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.questions.map((item, idx) => (
                  <Collapsible key={idx}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left hover:bg-muted/50 rounded-lg transition-colors group">
                      <span className="font-medium pr-4">{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Still have questions?</CardTitle>
            <CardDescription>Our chat support is here to help you</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Head over to the Chat section to get personalized answers to your questions from our support team.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
