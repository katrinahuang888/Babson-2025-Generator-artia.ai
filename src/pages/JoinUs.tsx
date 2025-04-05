import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from '@/components/ui/use-toast';

const JoinUs = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock submission - in a real app, this would call an API to handle the email submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thank you for signing up!",
        description: "You will stay updated on community happenings.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 bg-gradient-to-b from-background to-secondary/50 font-tinos" style={{ color: '#313e7f' }}>
      <div className="w-full max-w-md mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Join Us</CardTitle>
            <CardDescription>
              Sign up for our newsletter and stay updated on community happenings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Signing up...
                  </span>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinUs;