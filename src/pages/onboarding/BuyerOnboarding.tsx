
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { toast } from '@/components/ui/use-toast';

const BuyerOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      toast({
        title: "Onboarding complete!",
        description: "You're all set to start commissioning creative work.",
      });
      navigate('/buyer/dashboard');
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">Welcome to CreatorMarket!</h2>
            <p className="text-muted-foreground">
              We're excited to help you find the perfect creator for your projects. 
              Let's start by getting to know what you're interested in.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">What types of projects are you interested in?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Digital Art', 'Illustration', 'Logo Design', 'Character Design', 
                  'Animation', 'UI/UX Design', 'Graphic Design', 'Other'].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox id={interest.toLowerCase().replace(/\s/g, '-')} />
                    <Label htmlFor={interest.toLowerCase().replace(/\s/g, '-')}>{interest}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button onClick={handleNextStep} className="w-full sm:w-auto">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">How to Commission Work</h2>
            <p className="text-muted-foreground">
              Here's a quick guide on how to get the most out of your experience on CreatorMarket.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-marketplace-purple text-white flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-medium">Create a Request</h3>
                  <p className="text-muted-foreground">
                    Fill out the commission form with details about your project.
                    The more information you provide, the better!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-marketplace-purple text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-medium">Upload Reference Images</h3>
                  <p className="text-muted-foreground">
                    Share visual references to help creators understand your vision.
                    Examples of styles you like are very helpful.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-marketplace-purple text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-medium">Review Offers & Communicate</h3>
                  <p className="text-muted-foreground">
                    Interested creators will send offers. Review them and use our
                    chat feature to discuss details before accepting.
                  </p>
                </div>
              </div>
            </div>
            
            <Button onClick={handleNextStep} className="w-full sm:w-auto">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">You're Almost Ready!</h2>
            <p className="text-muted-foreground">
              Let's set up your buyer profile to help creators understand your preferences.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Receive updates about new creators and features</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" defaultChecked />
                <Label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</Label>
              </div>
            </div>
            
            <div className="pt-4">
              <Button onClick={handleNextStep} className="w-full sm:w-auto">
                Complete Setup <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <OnboardingLayout 
      title="Buyer Onboarding" 
      step={currentStep} 
      totalSteps={totalSteps}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};

export default BuyerOnboarding;
