import { useState } from "react";
import { Calendar as CalendarIcon, Circle, Droplet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function Tracker() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const periodDays = [1, 2, 3, 4, 5];
  const ovulationDays = [13, 14, 15];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Period Tracker</h1>
          <p className="text-muted-foreground">Monitor your cycle and predict your next period</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                Cycle Calendar
              </CardTitle>
              <CardDescription>Tap a day to log symptoms or notes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
                    {day}
                  </div>
                ))}
                {days.map((day) => {
                  const isPeriod = periodDays.includes(day);
                  const isOvulation = ovulationDays.includes(day);
                  const isSelected = selectedDay === day;
                  
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                        transition-all hover:scale-105
                        ${isPeriod ? 'bg-gradient-to-br from-accent to-accent/80 text-white' : ''}
                        ${isOvulation ? 'bg-gradient-to-br from-secondary to-secondary/80 text-white' : ''}
                        ${!isPeriod && !isOvulation ? 'bg-muted/50 hover:bg-muted' : ''}
                        ${isSelected ? 'ring-2 ring-primary ring-offset-2' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-accent to-accent/80"></div>
                  <span className="text-sm">Period days</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-secondary to-secondary/80"></div>
                  <span className="text-sm">Ovulation window</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-accent" />
                  Quick Log
                </CardTitle>
                <CardDescription>Track your flow and symptoms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Flow Level</label>
                  <div className="flex gap-2">
                    {['Light', 'Medium', 'Heavy'].map((level) => (
                      <Button key={level} variant="outline" className="flex-1">
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Symptoms</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Cramps', 'Headache', 'Mood', 'Fatigue'].map((symptom) => (
                      <Button key={symptom} variant="outline" size="sm">
                        {symptom}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Save Entry
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Circle className="w-5 h-5 text-primary" />
                  Cycle Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Average cycle:</span>
                  <span className="font-semibold">28 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Period length:</span>
                  <span className="font-semibold">5 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next period:</span>
                  <span className="font-semibold text-accent">Dec 15</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
