import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from '@/components/ui/use-toast';
import { ArrowRight, Mail, Lock } from "lucide-react";

type AuthFormProps = {
  type: 'register' | 'login';
};

const AuthForm = ({ type }: AuthFormProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock authentication - in a real app, this would call an API
    setTimeout(() => {
      setLoading(false);
      
      if (type === 'login') {
        toast({
          title: "Logged in successfully!",
          description: "Welcome back to CreatorMarket",
        });
        
        // Redirect based on user type
        navigate(userType === 'buyer' ? '/buyer/dashboard' : '/seller/dashboard');
      } else {
        toast({
          title: "Account created successfully!",
          description: "Welcome to CreatorMarket",
        });
        navigate(`/onboarding/${userType}`);
      }
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
      <CardHeader>
        <CardTitle>{type === 'login' ? 'Login' : 'Create an Account'}</CardTitle>
        <CardDescription>
          {type === 'login' 
            ? 'Enter your email and password to access your account' 
            : 'Join CreatorMarket to start commissioning or selling creative work'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" 
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="pl-10"
                required
              />
            </div>
          </div>
          
          {type === 'register' && (
            <div className="space-y-2">
              <Label>I am a:</Label>
              <RadioGroup 
                value={userType}
                onValueChange={(value) => setUserType(value as 'buyer' | 'seller')}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="buyer" id="buyer" />
                  <Label htmlFor="buyer">Buyer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="seller" id="seller" />
                  <Label htmlFor="seller">Creator</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                {type === 'login' ? 'Logging in...' : 'Creating account...'}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {type === 'login' ? 'Login' : 'Sign Up'}
                <ArrowRight size={16} />
              </span>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t p-6">
        {type === 'login' ? (
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a 
              href="/register" 
              className="text-marketplace-purple hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate('/register');
              }}
            >
              Sign up
            </a>
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <a 
              href="/login" 
              className="text-marketplace-purple hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}
            >
              Login
            </a>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthForm;