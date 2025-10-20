import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help answer your questions about sexual health and periods. What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for your question! This is a demo chat. In a full version, this would connect to real support or AI assistance to help answer your health questions.",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-20 md:pt-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-8 max-w-4xl h-[calc(100vh-12rem)] flex flex-col">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Support Chat</h1>
          <p className="text-muted-foreground">Get personalized help with your questions</p>
        </header>

        <Card className="flex-1 flex flex-col shadow-soft">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              Health Assistant
            </CardTitle>
            <CardDescription>Ask anything about periods, symptoms, or sexual health</CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.sender === "user" 
                      ? "bg-gradient-to-br from-primary to-accent" 
                      : "bg-gradient-to-br from-secondary to-primary"
                  }`}>
                    {message.sender === "user" ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className={`max-w-[70%] ${message.sender === "user" ? "text-right" : ""}`}>
                    <div className={`rounded-2xl px-4 py-2 inline-block ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-primary to-accent text-white"
                        : "bg-muted"
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSend}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
