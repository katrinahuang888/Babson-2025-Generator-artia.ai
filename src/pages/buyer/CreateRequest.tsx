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
    specialties: ['Digital Art', 'Character Design', 'Illustration'],
    portfolio: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
      'https://images.unsplash.com/photo-1626544827763-d516dce335e2',
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968'
    ],
    bio: 'Digital artist specializing in character design and illustration with over 8 years of experience.',
    completedProjects: 89
  },
  {
    id: '2',
    name: 'Morgan Zhang',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4.8,
    reviewCount: 97,
    specialties: ['Logo Design', 'UI/UX Design', 'Branding'],
    portfolio: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d'
    ],
    bio: 'Brand designer and identity expert. I help businesses stand out with compelling visual design.',
    completedProjects: 67
  },
  {
    id: '3',
    name: 'Sam Rivera',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5.0,
    reviewCount: 45,
    specialties: ['Animation', '3D Modeling', 'Motion Graphics'],
    portfolio: [
      'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d',
      'https://images.unsplash.com/photo-1618556658017-fd9c732d1360',
      'https://images.unsplash.com/photo-1618556658113-565c7e3bc4dd'
    ],
    bio: 'Animator and motion designer bringing characters and stories to life through movement.',
    completedProjects: 42
  },
  {
    id: '4',
    name: 'Jamie Taylor',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4.7,
    reviewCount: 88,
    specialties: ['Illustration', 'Comic Art', 'Concept Design'],
    portfolio: [
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3',
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
      'https://images.unsplash.com/photo-1600132806608-231446b2e7af'
    ],
    bio: 'Illustrator with a passion for storytelling through detailed character illustrations and concept art.',
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
          : ['Digital Art', 'Illustration', 'Character Design'];
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
                <span className="block mt-1">
                  <strong>Tip:</strong> We'll analyze these images to find creators who match your style preferences.
                </span>
              </p>
              
              <input 
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                multiple
                className="hidden"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.referenceUrls.map((url, index) => (
                  <div 
                    key={index}
                    className="relative border rounded-lg overflow-hidden h-40"
                  >
                    <img 
                      src={url} 
                      alt={`Reference ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                
                {formData.referenceUrls.length < 4 && Array.from({ 
                  length: Math.min(4 - formData.referenceUrls.length, 4) 
                }).map((_, index) => (
                  <div 
                    key={`upload-${index}`}
                    className="border-2 border-dashed rounded-lg p-6 text-center h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/30"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <UploadCloud className="h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Click to upload
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: JPG, PNG, WebP (Max 5MB each)
              </p>
            </div>
            
            <div className="space-y-2 mt-8">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea 
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                placeholder="Anything else you'd like to tell the creator about your request?"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-2">Recommended Creators</h3>
              <p className="text-muted-foreground mb-6">
                Based on your images and project details, we've matched you with these creators.
                Select one or more to receive your project request.
              </p>
              
              {matchedCreators.length > 0 ? (
                <div className="space-y-6">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {matchedCreators.map((creator) => {
                        const isSelected = formData.selectedCreators.includes(creator.id);
                        
                        return (
                          <CarouselItem key={creator.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                              <Card 
                                className={`overflow-hidden cursor-pointer transition-all ${
                                  isSelected 
                                    ? 'ring-2 ring-primary ring-offset-2' 
                                    : 'hover:shadow-md'
                                }`}
                                onClick={() => toggleCreatorSelection(creator.id)}
                              >
                                <div className="grid grid-cols-2 gap-1 p-3">
                                  {creator.portfolio.slice(0, 4).map((img, idx) => (
                                    <div key={idx} className="aspect-square overflow-hidden rounded-sm">
                                      <img 
                                        src={img} 
                                        alt={`${creator.name}'s work sample ${idx + 1}`}
                                        className="object-cover w-full h-full"
                                      />
                                    </div>
                                  ))}
                                </div>
                                
                                <div className="p-4 pt-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <Avatar>
                                      <AvatarImage src={creator.avatar} />
                                      <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h4 className="font-medium">{creator.name}</h4>
                                      <div className="flex items-center">
                                        <span className="text-sm font-medium">{creator.rating}</span>
                                        <span className="text-yellow-500 mx-1">★</span>
                                        <span className="text-xs text-muted-foreground">
                                          ({creator.reviewCount} reviews)
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {creator.specialties.map((specialty, idx) => (
                                      <Badge key={idx} variant="secondary" className="text-xs">
                                        {specialty}
                                      </Badge>
                                    ))}
                                  </div>
                                  
                                  {isSelected ? (
                                    <Badge className="bg-primary text-primary-foreground">
                                      Selected
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline">Click to select</Badge>
                                  )}
                                </div>
                              </Card>
                            </div>
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                  </Carousel>
                  
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <h4 className="font-medium mb-2">
                      Selected Creators: {formData.selectedCreators.length}
                    </h4>
                    {formData.selectedCreators.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {formData.selectedCreators.map(id => {
                          const creator = matchedCreators.find(c => c.id === id);
                          return creator ? (
                            <Badge key={id} variant="secondary" className="pl-1">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage src={creator.avatar} />
                                <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              {creator.name}
                              <button 
                                className="ml-1 hover:text-destructive" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleCreatorSelection(id);
                                }}
                              >
                                ×
                              </button>
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Please select at least one creator to receive your project request
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Image className="h-12 w-12 text-muted-foreground mb-4" />
                  <p>Finding creators who match your style...</p>
                </div>
              )}
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
            <span>Select Creators</span>
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
              
              <Button 
                onClick={handleNextStep}
                disabled={currentStep === totalSteps && formData.selectedCreators.length === 0}
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
