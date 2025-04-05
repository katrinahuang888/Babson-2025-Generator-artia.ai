
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, UploadCloud } from "lucide-react";
import { toast } from '@/components/ui/use-toast';

const SellerOnboarding = () => {
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
        description: "Your creator profile has been set up successfully.",
      });
      navigate('/seller/dashboard');
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">Welcome, Creator!</h2>
            <p className="text-muted-foreground">
              Let's set up your profile to showcase your creative skills and attract clients.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input id="displayName" placeholder="Your professional name or handle" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell potential clients about yourself and your creative work..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Profile Picture</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <UploadCloud className="h-10 w-10 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag and drop or click to upload
                  </p>
                  <Input type="file" className="hidden" />
                  <Button variant="outline" size="sm" className="mt-4">
                    Select File
                  </Button>
                </div>
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
            <h2 className="text-2xl font-semibold">Showcase Your Work</h2>
            <p className="text-muted-foreground">
              Upload examples of your previous work to showcase your skills to potential clients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center min-h-[150px]">
                  <UploadCloud className="h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">Upload work sample</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Select File
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="specialties">Your Specialties</Label>
              <Input id="specialties" placeholder="e.g., Character Design, Logo Design, UI/UX Design" />
              <p className="text-xs text-muted-foreground">Separate specialties with commas</p>
            </div>
            
            <Button onClick={handleNextStep} className="w-full sm:w-auto">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">Set Your Preferences</h2>
            <p className="text-muted-foreground">
              Configure your creator preferences to help manage client expectations.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="rateRange">Your Rate Range</Label>
                <Input id="rateRange" placeholder="e.g., $50-200 per project" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="turnaround">Average Turnaround Time</Label>
                <Input id="turnaround" placeholder="e.g., 3-5 business days" />
              </div>
              
              <div className="space-y-2 pt-2">
                <Label>Project Types You Accept</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {['Digital Art', 'Illustration', 'Logo Design', 'Character Design', 
                    'Animation', 'UI/UX Design', 'Graphic Design', 'Other'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type.toLowerCase().replace(/\s/g, '-')} />
                      <Label htmlFor={type.toLowerCase().replace(/\s/g, '-')}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" defaultChecked />
                <Label htmlFor="terms">
                  I agree to the Creator Guidelines, Terms of Service and Privacy Policy
                </Label>
              </div>
            </div>
            
            <Button onClick={handleNextStep} className="w-full sm:w-auto">
              Complete Setup <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <OnboardingLayout 
      title="Creator Onboarding" 
      step={currentStep} 
      totalSteps={totalSteps}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};

export default SellerOnboarding;
