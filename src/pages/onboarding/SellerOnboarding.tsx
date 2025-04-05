
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
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">Welcome, Artisan!</h2>
            <p className="text-muted-foreground">
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
                  <UploadCloud className="h-10 w-10 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
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

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">Your Artisan Community</h2>
            <p className="text-muted-foreground">
              Tell us about the community of artisans you work with or represent.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="communityName">Community or Cooperative Name (if applicable)</Label>
                <Input id="communityName" placeholder="Name of your artisan community or cooperative" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="communitySize">Number of Artisans</Label>
                <Input id="communitySize" type="number" placeholder="How many artisans are in your community?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="communityStory">Community Story</Label>
                <Textarea 
                  id="communityStory" 
                  placeholder="Share the story of your artisan community - its history, traditions, and cultural significance..." 
                  className="min-h-[150px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="culturalSignificance">Cultural Heritage & Techniques</Label>
                <Textarea 
                  id="culturalSignificance" 
                  placeholder="Describe the cultural importance and traditional techniques preserved in your craft..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Community Photos</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center min-h-[150px]">
                      <UploadCloud className="h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">Upload community photo</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Select File
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePreviousStep}>
                Back
              </Button>
              <Button onClick={handleNextStep}>
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">Your Handcrafted Products</h2>
            <p className="text-muted-foreground">
              Tell us about the handmade items you create and sell.
            </p>
            
            {products.map((product, index) => (
              <div key={product.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Product {index + 1}</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeProduct(product.id)}
                    disabled={products.length === 1}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`productName-${product.id}`}>Product Name</Label>
                  <Input 
                    id={`productName-${product.id}`} 
                    value={product.name} 
                    onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                    placeholder="Name of your handcrafted item" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`productDescription-${product.id}`}>Product Description</Label>
                  <Textarea 
                    id={`productDescription-${product.id}`} 
                    value={product.description}
                    onChange={(e) => updateProduct(product.id, 'description', e.target.value)}
                    placeholder="Describe your handmade product..." 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`productSpecifications-${product.id}`}>Product Specifications</Label>
                  <Textarea 
                    id={`productSpecifications-${product.id}`} 
                    value={product.specifications}
                    onChange={(e) => updateProduct(product.id, 'specifications', e.target.value)}
                    placeholder="Size, materials, colors, variations, etc..." 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`materialCost-${product.id}`}>Material Cost</Label>
                    <Input 
                      id={`materialCost-${product.id}`} 
                      value={product.materialCost}
                      onChange={(e) => updateProduct(product.id, 'materialCost', e.target.value)}
                      placeholder="Approximate cost of materials" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`timeToMake-${product.id}`}>Time to Create</Label>
                    <Input 
                      id={`timeToMake-${product.id}`} 
                      value={product.timeToMake}
                      onChange={(e) => updateProduct(product.id, 'timeToMake', e.target.value)}
                      placeholder="Average production time" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Product Photos</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[1, 2, 3].map((photoIndex) => (
                      <div key={photoIndex} className="border-2 border-dashed rounded-lg p-3 flex flex-col items-center justify-center min-h-[120px]">
                        <UploadCloud className="h-6 w-6 text-muted-foreground" />
                        <p className="mt-1 text-xs text-muted-foreground">Upload photo</p>
                        <Button variant="outline" size="sm" className="mt-1 text-xs py-1 h-7">
                          Select
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full flex items-center justify-center" 
              onClick={addProduct}
            >
              <Plus className="h-4 w-4 mr-2" /> Add Another Product
            </Button>
            
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePreviousStep}>
                Back
              </Button>
              <Button onClick={handleNextStep}>
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold">Final Details</h2>
            <p className="text-muted-foreground">
              Just a few more details before completing your artisan profile.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="priceRange">Price Range for Your Products</Label>
                <Input id="priceRange" placeholder="e.g., $25-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productionCapacity">Production Capacity</Label>
                <Input id="productionCapacity" placeholder="How many items can you produce per month?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="shippingInfo">Shipping Information</Label>
                <Textarea 
                  id="shippingInfo" 
                  placeholder="Describe your shipping methods, areas you ship to, and any relevant information..." 
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sustainabilityInfo">Sustainability Practices</Label>
                <Textarea 
                  id="sustainabilityInfo" 
                  placeholder="Describe any sustainable practices in your production, materials sourcing, or business operations..." 
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" defaultChecked />
                <Label htmlFor="terms">
                  I agree to the Artisan Guidelines, Terms of Service and Privacy Policy
                </Label>
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePreviousStep}>
                Back
              </Button>
              <Button onClick={handleNextStep}>
                Complete Profile <ArrowRight className="ml-2 h-4 w-4" />
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
      title="Artisan Onboarding" 
      step={currentStep} 
      totalSteps={totalSteps}
    >
      {renderStepContent()}
    </OnboardingLayout>
  );
};

export default SellerOnboarding;
