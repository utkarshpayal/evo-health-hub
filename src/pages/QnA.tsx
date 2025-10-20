import { Search, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navigation from "@/components/Navigation";

const faqs = [
  {
    category: "Period Basics",
    questions: [
      {
        q: "What is a normal period length?",
        a: "A typical period lasts 3-7 days, with an average of 5 days. Flow is usually heavier in the first few days and lighter towards the end. If your period regularly lasts longer than 7 days or is very short, consider talking to a healthcare provider."
      },
      {
        q: "How much bleeding is normal?",
        a: "On average, people lose about 2-3 tablespoons of blood during their period. You should change pads/tampons every 4-8 hours. If you're soaking through products every 1-2 hours, that's considered heavy bleeding and you should consult a doctor."
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
    category: "Sexual Health",
    questions: [
      {
        q: "What are the different types of contraception?",
        a: "Common methods include barrier methods (condoms), hormonal methods (pills, patches, IUDs), and natural family planning. Each has different effectiveness rates and side effects. Condoms are the only method that also protect against STIs."
      },
      {
        q: "How can I protect myself from STIs?",
        a: "Use barrier protection (condoms) consistently, get regular STI testing, limit sexual partners, and have open conversations about sexual health with partners. Get vaccinated for HPV if eligible."
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
