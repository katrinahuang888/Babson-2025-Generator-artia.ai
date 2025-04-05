import React, { useState, useRef } from 'react';
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
import { UploadCloud, ArrowLeft, ArrowRight, X, Image } from "lucide-react";
import { toast } from '@/components/ui/use-toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const MOCK_CREATORS = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 4.9,
    reviewCount: 124,
    specialties: ['Pottery', 'Ceramic Tableware', 'Decorative Vessels'],
    portfolio: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261',
      'https://images.unsplash.com/photo-1603813507806-0963f2583444',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61'
    ],
    bio: 'Ceramic artisan specializing in functional pottery and decorative vessels with 8+ years of experience.',
    completedProjects: 89
  },
  {
    id: '2',
    name: 'Morgan Zhang',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4.8,
    reviewCount: 97,
    specialties: ['Weaving', 'Tapestry', 'Natural Dye Textiles'],
    portfolio: [
      'https://images.unsplash.com/photo-1584656197538-558e0e335324',
      'https://images.unsplash.com/photo-1588187284031-3cea78e5dc76',
      'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad'
    ],
    bio: 'Textile artisan specializing in handwoven goods using natural fibers and traditional techniques.',
    completedProjects: 67
  },
  {
    id: '3',
    name: 'Sam Rivera',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5.0,
    reviewCount: 45,
    specialties: ['Woodworking', 'Furniture', 'Wood Carving'],
    portfolio: [
      'https://images.unsplash.com/photo-1544964571-b9514a50a356',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a',
      'https://images.unsplash.com/photo-1575539665466-3cbd3feda337'
    ],
    bio: 'Master woodworker crafting heirloom-quality furniture and decorative pieces from sustainably sourced wood.',
    completedProjects: 42
  },
  {
    id: '4',
    name: 'Jamie Taylor',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4.7,
    reviewCount: 88,
    specialties: ['Leather Crafting', 'Bags', 'Custom Accessories'],
    portfolio: [
      'https://images.unsplash.com/photo-1621478374422-35206faedbd5',
      'https://images.unsplash.com/photo-1585916795125-e864bdc93611',
      'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729'
    ],
    bio: 'Leather artisan creating timeless, functional pieces using traditional techniques and high-quality materials.',
    completedProjects: 56
  }
];

const CreateRequest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: [100],
    timeframe: 'standard',
    references: [] as File[],
    referenceUrls: [] as string[],
    additionalNotes: '',
    selectedCreators: [] as string[]
  });
  
  const [matchedCreators, setMatchedCreators] = useState<typeof MOCK_CREATORS>([]);
  
  const analyzeImages = () => {
    console.log("Analyzing images to match with creators...");
    return new Promise<string[]>(resolve => {
      setTimeout(() => {
        const detectedCategories = formData.category 
          ? [formData.category]
          : ['Pottery', 'Ceramic Tableware', 'Decorative Vessels'];
        resolve(detectedCategories);
      }, 1000);
    });
  };
  
  const findMatchingCreators = async () => {
    const detectedCategories = await analyzeImages();
    const filtered = MOCK_CREATORS.filter(creator => 
      creator.specialties.some(specialty => 
        detectedCategories.includes(specialty)
      )
    );
    setMatchedCreators(filtered.length > 0 ? filtered : MOCK_CREATORS);
  };
  
  const handleNextStep = async () => {
    if (currentStep < totalSteps) {
      if (currentStep === 3) {
        toast({
          title: "Analyzing your images...",
          description: "Finding creators that match your style preferences."
        });
        await findMatchingCreators();
      }
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      toast({
        title: "Request submitted!",
        description: `We'll notify your selected creators about your request.`,
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
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const newUrls = newFiles.map(file => URL.createObjectURL(file));
      
      setFormData({
        ...formData,
        references: [...formData.references, ...newFiles],
        referenceUrls: [...formData.referenceUrls, ...newUrls]
      });
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };
  
  const removeImage = (index: number) => {
    const newReferences = [...formData.references];
    const newUrls = [...formData.referenceUrls];
    
    URL.revokeObjectURL(newUrls[index]);
    
    newReferences.splice(index, 1);
    newUrls.splice(index, 1);
    
    setFormData({
      ...formData,
      references: newReferences,
      referenceUrls: newUrls
    });
  };
  
  const toggleCreatorSelection = (creatorId: string) => {
    const isSelected = formData.selectedCreators.includes(creatorId);
    
    if (isSelected) {
      setFormData({
        ...formData,
        selectedCreators: formData.selectedCreators.filter(id => id !== creatorId)
      });
    } else {
      setFormData({
        ...formData,
        selectedCreators: [...formData.selectedCreators, creatorId]
      });
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
            <div className="space-y-2">
              <Label htmlFor="title" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Project Title</Label>
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
              <Label htmlFor="description" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Project Description</Label>
              <Textarea 
                id="description" 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe what you're looking for in detail..." 
                className="min-h-[180px]"
                required
              />
              <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
                Be specific about the materials, style, and purpose of the handcrafted item you're requesting.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Craft Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select craft category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                  <SelectItem value="weaving">Weaving & Textile Arts</SelectItem>
                  <SelectItem value="woodworking">Woodworking</SelectItem>
                  <SelectItem value="leather">Leather Crafting</SelectItem>
                  <SelectItem value="jewelry">Handcrafted Jewelry</SelectItem>
                  <SelectItem value="glass">Glasswork</SelectItem>
                  <SelectItem value="basket">Basket Weaving</SelectItem>
                  <SelectItem value="metal">Metalwork</SelectItem>
                  <SelectItem value="paper">Paper Crafts</SelectItem>
                  <SelectItem value="other">Other Handcrafts</SelectItem>
                </SelectContent>
              </Select>
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
              style={{ width: `${(currentStep / totalSteps) * 100}%`, backgroundColor: '#313e7f' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-marketplace-terracotta"
            ></div>
          </div>
          <div 
            className="flex justify-between text-xs mt-2"
            style={{ fontFamily: 'Tinos', color: '#313e7f' }}
          >
            <span>Project Details</span>
            <span>Budget & Timeline</span>
            <span>Reference Images</span>
            <span>Select Artisans</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
      <Navbar />
      
      <main className="flex-grow py-8 bg-gradient-to-b from-background to-marketplace-earth-light/30">
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
            <h1 className="text-3xl font-bold">Create a Craft Request</h1>
            <p className="text-muted-foreground">
              Tell our artisans what you're looking for to get the best handcrafted pieces
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
              
              <Button 
                onClick={handleNextStep}
                disabled={currentStep === totalSteps && formData.selectedCreators.length === 0}
                className="bg-marketplace-terracotta hover:bg-marketplace-terracotta-dark"
              >
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
