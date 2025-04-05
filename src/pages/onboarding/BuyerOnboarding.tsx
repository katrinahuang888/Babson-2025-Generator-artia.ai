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
        description: "You're all set to start commissioning handcrafted items.",
      });
      navigate('/buyer/dashboard');
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Welcome to ArtisanMarket!</h2>
            <p className="text-muted-foreground" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
              We're excited to help you find the perfect artisan for your handcrafted treasures. 
              Let's start by getting to know what you're interested in.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>What types of handcrafted items are you interested in?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Pottery & Ceramics', 'Handwoven Textiles', 'Woodworking', 'Leather Goods', 
                  'Jewelry', 'Glass Art', 'Metal Work', 'Other'].map((interest) => (
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
            <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>How to Commission Artisan Work</h2>
            <p className="text-muted-foreground" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
              Here's a quick guide on how to get the most out of your experience on ArtisanMarket.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-marketplace-purple text-white flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-medium" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Create a Commission Request</h3>
                  <p className="text-muted-foreground" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
                    Fill out the commission form with details about the handcrafted item you want.
                    Include size, materials, colors, and any other specifications.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-marketplace-purple text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-medium" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Upload Reference Images</h3>
                  <p className="text-muted-foreground" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
                    Share visual references to help artisans understand your vision.
                    Examples of similar handcrafted pieces you like are very helpful.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-marketplace-purple text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-medium" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Review Offers & Communicate</h3>
                  <p className="text-muted-foreground" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
                    Interested artisans will send offers. Review them and use our
                    chat feature to discuss details, materials, and timeline before accepting.
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
            <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>You're Almost Ready!</h2>
            <p className="text-muted-foreground" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
              Let's set up your buyer profile to help artisans understand your preferences.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Receive updates about new artisans and handcrafted treasures</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" defaultChecked />
                <Label htmlFor="terms" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>I agree to the Terms of Service and Privacy Policy</Label>
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
