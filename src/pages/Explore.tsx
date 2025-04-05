
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Star } from "lucide-react";
import { useSearchParams, Link } from 'react-router-dom';

// Mock data for creators/sellers
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

const Explore = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter creators based on search term and/or category from URL params
  const filteredCreators = MOCK_CREATORS.filter(creator => {
    const matchesSearch = searchTerm === '' || 
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = category === '' || 
      creator.specialties.some(s => s.toLowerCase().includes(category.toLowerCase()));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gradient-to-b from-background to-secondary/50">
        <div className="content-container max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find the Perfect Creator</h1>
            <p className="text-muted-foreground">
              {category ? `Browsing creators in ${category}` : 'Browse talented creators for your next project'}
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Search by name, specialty, or skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {/* Featured creators */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {category ? `Top ${category} Creators` : 'Featured Creators'}
            </h2>
            
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {filteredCreators.map((creator) => (
                    <CarouselItem key={creator.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <Card className="overflow-hidden">
                          <div className="aspect-square relative overflow-hidden">
                            <img 
                              src={creator.portfolio[0]} 
                              alt={`${creator.name}'s work`}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-background/80 text-foreground">
                                <Star className="h-3 w-3 mr-1 text-yellow-500 fill-yellow-500" />
                                {creator.rating}
                              </Badge>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <img 
                                src={creator.avatar} 
                                alt={creator.name} 
                                className="w-10 h-10 rounded-full"
                              />
                              <div>
                                <CardTitle className="text-lg">{creator.name}</CardTitle>
                                <p className="text-xs text-muted-foreground">
                                  {creator.completedProjects} projects completed
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="pb-3">
                            <div className="flex flex-wrap gap-1 mb-2">
                              {creator.specialties.slice(0, 2).map((specialty, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                              {creator.specialties.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{creator.specialties.length - 2}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm line-clamp-2">{creator.bio}</p>
                          </CardContent>
                          
                          <CardFooter>
                            <Link to={`/creator/${creator.id}`} className="w-full">
                              <Button variant="default" className="w-full">View Profile</Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </Carousel>
            </div>
          </div>
          
          {/* Creators grid */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              {filteredCreators.length > 0 ? 'All Creators' : 'No creators found'}
            </h2>
            
            {filteredCreators.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCreators.map((creator) => (
                  <Card key={creator.id} className="overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {creator.portfolio.slice(0, 4).map((img, idx) => (
                        <div key={idx} className="aspect-square overflow-hidden rounded-md">
                          <img 
                            src={img} 
                            alt={`${creator.name}'s work sample ${idx + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={creator.avatar} 
                          alt={creator.name} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="flex items-center">
                            <CardTitle className="text-lg mr-2">{creator.name}</CardTitle>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm ml-1">{creator.rating}</span>
                              <span className="text-xs text-muted-foreground ml-1">
                                ({creator.reviewCount})
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {creator.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <p className="text-sm">{creator.bio}</p>
                      <p className="text-sm font-medium mt-2">
                        {creator.completedProjects} projects completed
                      </p>
                    </CardContent>
                    
                    <CardFooter>
                      <Link to={`/creator/${creator.id}`} className="w-full">
                        <Button className="w-full">View Profile</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-muted-foreground">
                  No creators found matching your criteria. Try changing your search or filters.
                </p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
