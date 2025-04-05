import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ArrowRight, UploadCloud, Plus, Trash2 } from "lucide-react";
import { toast } from '@/components/ui/use-toast';

interface Product {
  id: number;
  name: string;
  description: string;
  materialCost: string;
  timeToMake: string;
  specifications: string;
}

const SellerOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: '', description: '', materialCost: '', timeToMake: '', specifications: '' }
  ]);
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      toast({
        title: "Onboarding complete!",
        description: "Your artisan profile has been set up successfully.",
      });
      navigate('/seller/dashboard');
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addProduct = () => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([...products, { 
      id: newId, 
      name: '', 
      description: '', 
      materialCost: '', 
      timeToMake: '', 
      specifications: ''
    }]);
  };

  const removeProduct = (id: number) => {
    if (products.length > 1) {
      setProducts(products.filter(product => product.id !== id));
    } else {
      toast({
        title: "Cannot remove",
        description: "You need at least one product.",
        variant: "destructive"
      });
    }
  };

  const updateProduct = (id: number, field: keyof Product, value: string) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, [field]: value } : product
    ));
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in font-tinos text-313e7f">
            <h2 className="text-2xl font-semibold">Welcome, Artisan!</h2>
            <p className="text-313e7f">
              Let's set up your profile to showcase your craft skills and connect with customers who value handmade goods.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Artisan Name or Studio Name</Label>
                <Input id="displayName" placeholder="Your professional name or studio name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Where are you based?</Label>
                <Input id="location" placeholder="City, Region, Country" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="craftsmanType">Type of Craftsmanship</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your primary craft" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                    <SelectItem value="weaving">Weaving & Textiles</SelectItem>
                    <SelectItem value="woodworking">Woodworking</SelectItem>
                    <SelectItem value="leatherwork">Leather Crafting</SelectItem>
                    <SelectItem value="jewelry">Handmade Jewelry</SelectItem>
                    <SelectItem value="glasswork">Glass Art</SelectItem>
                    <SelectItem value="other">Other Crafts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">About Your Craft Practice</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell potential customers about your craft experience, techniques, and philosophy..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Artisan or Workshop Photo</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <UploadCloud className="h-10 w-10 mx-auto text-313e7f" />
                  <p className="mt-2 text-sm text-313e7f">
                    Drag and drop or click to upload a photo of yourself or your workshop
                  </p>
                  <Input type="file" className="hidden" />
                  <Button variant="outline" size="sm" className="mt-4">
                    Select File
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <div></div> {/* Empty div for spacing */}
              <Button onClick={handleNextStep} className="w-full sm:w-auto">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      // Continue with similar changes for other cases...
      
      default:
        return null;
    }
  };
  
  return (
    <OnboardingLayout 
      title="Artisan Onboarding" 
      step={currentStep} 
      totalSteps={totalSteps}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};

export default SellerOnboarding;