import { Calendar, Heart, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroHealthImg from "@/assets/hero-health.jpg";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8">
        <div className="mb-8 rounded-2xl overflow-hidden shadow-glow">
          <img 
            src={heroHealthImg} 
            alt="Health and wellness for everyone"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">
            Welcome to CycleWell
          </h1>
          <p className="text-muted-foreground text-lg">Your inclusive health companion for everyone</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-pink-500/20 shadow-soft hover:shadow-glow transition-all cursor-pointer group">
            <Link to="/girls-health">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  Girls' Health Guide
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>
                  Periods, hygiene, sexual health, and comprehensive care information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    <span>Menstrual health & hygiene</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    <span>Sexual wellness & safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    <span>Common issues & solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Link>
          </Card>

          <Card className="border-blue-500/20 shadow-soft hover:shadow-glow transition-all cursor-pointer group">
            <Link to="/boys-health">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  Boys' Health Guide
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>
                  Nightfall, masturbation, sexual health, and hygiene information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Nightfall & wet dreams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Sexual health & safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Hygiene & personal care</span>
                  </li>
                </ul>
              </CardContent>
            </Link>
          </Card>
        </div>

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
