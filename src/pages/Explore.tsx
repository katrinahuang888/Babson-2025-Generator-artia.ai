
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

// Mock data for artisans
const MOCK_ARTISANS = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 4.9,
    reviewCount: 124,
    specialties: ['Pottery', 'Ceramics', 'Clay Sculpture'],
    portfolio: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa',
      'https://images.unsplash.com/photo-1552740844-4f8a8206c68d',
      'https://images.unsplash.com/photo-1579122625825-6b5812eeae12'
    ],
    bio: 'Master potter with over 10 years of experience creating functional and decorative ceramics using traditional techniques.',
    completedProjects: 89
  },
  {
    id: '2',
    name: 'Morgan Zhang',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4.8,
    reviewCount: 97,
    specialties: ['Weaving', 'Textile Art', 'Handwoven Rugs'],
    portfolio: [
      'https://images.unsplash.com/photo-1549517045-bc93de075e53',
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6',
      'https://images.unsplash.com/photo-1611021061278-75a732031fb3'
    ],
    bio: 'Textile artist specializing in handwoven rugs and wall hangings using traditional looms and natural dyes.',
    completedProjects: 67
  },
  {
    id: '3',
    name: 'Sam Rivera',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5.0,
    reviewCount: 45,
    specialties: ['Woodworking', 'Furniture Making', 'Wood Carving'],
    portfolio: [
      'https://images.unsplash.com/photo-1595341595379-cf1cd0ed7ad1',
      'https://images.unsplash.com/photo-1588203333358-08dcc9bbe1eb',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
    ],
    bio: 'Woodworker and furniture maker crafting heirloom-quality pieces using sustainable hardwoods and traditional joinery.',
    completedProjects: 42
  },
  {
    id: '4',
    name: 'Jamie Taylor',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4.7,
    reviewCount: 88,
    specialties: ['Leather Crafting', 'Bookbinding', 'Custom Bags'],
    portfolio: [
      'https://images.unsplash.com/photo-1603189889244-28a84abb14e0',
      'https://images.unsplash.com/photo-1559141865-636ed4b2a45d',
      'https://images.unsplash.com/photo-1614267119077-538efdf16a28'
    ],
    bio: 'Leather artisan creating handstitched bags, wallets, and accessories using traditional techniques and ethically sourced materials.',
    completedProjects: 56
  }
];

const Explore = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter artisans based on search term and/or category from URL params
  const filteredArtisans = MOCK_ARTISANS.filter(artisan => {
    const matchesSearch = searchTerm === '' || 
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = category === '' || 
      artisan.specialties.some(s => s.toLowerCase().includes(category.toLowerCase()));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gradient-to-b from-background to-secondary/50">
        <div className="content-container max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find the Perfect Artisan</h1>
            <p className="text-muted-foreground">
              {category ? `Browsing artisans in ${category}` : 'Browse skilled artisans for your handcrafted treasures'}
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Search by craft, specialty, or material..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {/* Featured artisans */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {category ? `Top ${category} Artisans` : 'Featured Artisans'}
            </h2>
            
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {filteredArtisans.map((artisan) => (
                    <CarouselItem key={artisan.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <Card className="overflow-hidden">
                          <div className="aspect-square relative overflow-hidden">
                            <img 
                              src={artisan.portfolio[0]} 
                              alt={`${artisan.name}'s work`}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-background/80 text-foreground">
                                <Star className="h-3 w-3 mr-1 text-yellow-500 fill-yellow-500" />
                                {artisan.rating}
                              </Badge>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                              <img 
                                src={artisan.avatar} 
                                alt={artisan.name} 
                                className="w-10 h-10 rounded-full"
                              />
                              <div>
                                <CardTitle className="text-lg">{artisan.name}</CardTitle>
                                <p className="text-xs text-muted-foreground">
                                  {artisan.completedProjects} handcrafted pieces completed
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="pb-3">
                            <div className="flex flex-wrap gap-1 mb-2">
                              {artisan.specialties.slice(0, 2).map((specialty, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                              {artisan.specialties.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{artisan.specialties.length - 2}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm line-clamp-2">{artisan.bio}</p>
                          </CardContent>
                          
                          <CardFooter>
                            <Link to={`/artisan/${artisan.id}`} className="w-full">
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
          
          {/* Artisans grid */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              {filteredArtisans.length > 0 ? 'All Artisans' : 'No artisans found'}
            </h2>
            
            {filteredArtisans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtisans.map((artisan) => (
                  <Card key={artisan.id} className="overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {artisan.portfolio.slice(0, 4).map((img, idx) => (
                        <div key={idx} className="aspect-square overflow-hidden rounded-md">
                          <img 
                            src={img} 
                            alt={`${artisan.name}'s work sample ${idx + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={artisan.avatar} 
                          alt={artisan.name} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="flex items-center">
                            <CardTitle className="text-lg mr-2">{artisan.name}</CardTitle>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm ml-1">{artisan.rating}</span>
                              <span className="text-xs text-muted-foreground ml-1">
                                ({artisan.reviewCount})
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {artisan.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <p className="text-sm">{artisan.bio}</p>
                      <p className="text-sm font-medium mt-2">
                        {artisan.completedProjects} handcrafted pieces completed
                      </p>
                    </CardContent>
                    
                    <CardFooter>
                      <Link to={`/artisan/${artisan.id}`} className="w-full">
                        <Button className="w-full">View Profile</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-muted-foreground">
                  No artisans found matching your criteria. Try changing your search or filters.
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
