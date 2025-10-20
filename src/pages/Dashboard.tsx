import { Calendar, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">
            Welcome to CycleWell
          </h1>
          <p className="text-muted-foreground text-lg">Your personal health companion</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20 shadow-soft hover:shadow-glow transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Current Cycle</CardTitle>
              <CardDescription>Track your period with ease</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Day in cycle:</span>
                  <span className="font-semibold text-primary">14 of 28</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Next period in ~14 days</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 shadow-soft hover:shadow-glow transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Health Score</CardTitle>
              <CardDescription>Overall wellness tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Great job staying healthy!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 shadow-soft hover:shadow-glow transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Tracking consistency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Days tracked:</span>
                  <span className="font-semibold">67</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Streak:</span>
                  <span className="font-semibold text-accent">12 days 🔥</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Tips</CardTitle>
            <CardDescription>Health insights for today</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-sm">Stay hydrated - aim for 8 glasses of water today</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-sm">Light exercise can help reduce cramps during your period</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <p className="text-sm">Remember to log your symptoms for better insights</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
