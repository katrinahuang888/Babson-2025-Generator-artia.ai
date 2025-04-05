
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { UploadCloud, ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from '@/components/ui/use-toast';

const CreateRequest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: [100],
    timeframe: 'standard',
    references: [] as File[]
  });
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // Submit form
      toast({
        title: "Request submitted!",
        description: "We'll notify you when creators respond to your request.",
      });
      navigate('/buyer/dashboard');
    }
  };
  
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSliderChange = (value: number[]) => {
    setFormData({
      ...formData,
      budget: value
    });
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input 
                id="title" 
                name="title" 
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Give your project a descriptive title" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea 
                id="description" 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe what you're looking for in detail..." 
                className="min-h-[180px]"
                required
              />
              <p className="text-xs text-muted-foreground">
                Be specific about the style, elements, and purpose of what you're requesting.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital-art">Digital Art</SelectItem>
                  <SelectItem value="illustration">Illustration</SelectItem>
                  <SelectItem value="logo-design">Logo Design</SelectItem>
                  <SelectItem value="character-design">Character Design</SelectItem>
                  <SelectItem value="animation">Animation</SelectItem>
                  <SelectItem value="ui-design">UI/UX Design</SelectItem>
                  <SelectItem value="graphic-design">Graphic Design</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label>Budget Range</Label>
              <div className="pt-6 px-2">
                <Slider 
                  defaultValue={[100]} 
                  min={25} 
                  max={500} 
                  step={5} 
                  onValueChange={handleSliderChange}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-muted-foreground">$25</span>
                <span className="text-sm font-medium">${formData.budget[0]}</span>
                <span className="text-sm text-muted-foreground">$500+</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                This is an estimate. You can discuss the final price with the creator.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Timeframe</Label>
              <RadioGroup 
                value={formData.timeframe}
                onValueChange={(value) => handleSelectChange('timeframe', value)}
              >
                <div className="flex items-start space-x-2 bg-background p-3 rounded-md border mb-2">
                  <RadioGroupItem value="standard" id="timeframe-standard" />
                  <div className="grid gap-1">
                    <Label htmlFor="timeframe-standard" className="font-medium">Standard</Label>
                    <p className="text-sm text-muted-foreground">
                      1-2 weeks delivery time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 bg-background p-3 rounded-md border mb-2">
                  <RadioGroupItem value="expedited" id="timeframe-expedited" />
                  <div className="grid gap-1">
                    <Label htmlFor="timeframe-expedited" className="font-medium">Expedited</Label>
                    <p className="text-sm text-muted-foreground">
                      3-5 days delivery time, may increase price
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 bg-background p-3 rounded-md border">
                  <RadioGroupItem value="flexible" id="timeframe-flexible" />
                  <div className="grid gap-1">
                    <Label htmlFor="timeframe-flexible" className="font-medium">Flexible</Label>
                    <p className="text-sm text-muted-foreground">
                      No rush, can discuss timeline with creator
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label>Reference Images</Label>
              <p className="text-sm text-muted-foreground mb-4">
                Upload images that can help the creator understand your vision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div 
                    key={index} 
                    className="border-2 border-dashed rounded-lg p-6 text-center h-40 flex flex-col items-center justify-center"
                  >
                    <UploadCloud className="h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop or click to upload
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Select Image
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: JPG, PNG, WebP (Max 5MB each)
              </p>
            </div>
            
            <div className="space-y-2 mt-8">
              <Label>Additional Notes</Label>
              <Textarea 
                placeholder="Anything else you'd like to tell the creator about your request?"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  const renderProgressBar = () => {
    return (
      <div className="mb-8">
        <div className="relative">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-secondary">
            <div 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-marketplace-purple"
            ></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Project Details</span>
            <span>Budget & Timeline</span>
            <span>Reference Images</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gradient-to-b from-background to-secondary/50">
        <div className="content-container max-w-3xl">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)} 
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">Create a Project Request</h1>
            <p className="text-muted-foreground">
              Tell creators what you're looking for to get the best responses
            </p>
          </div>
          
          {renderProgressBar()}
          
          <Card className="p-6">
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePreviousStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Step
              </Button>
              
              <Button onClick={handleNextStep}>
                {currentStep === totalSteps ? (
                  <>Submit Request</>
                ) : (
                  <>
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateRequest;
