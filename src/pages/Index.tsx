
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Shield, Palette, MessageCircle, Star, HandMetal, PaintBucket, Scissors } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/50">
          <div className="content-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center md:text-left animate-fade-in">
                <h1 className="font-bold !leading-tight">
                  Discover Authentic <span className="gradient-text">Artisan</span> Crafts Filled With Heritage
                </h1>
                <p className="text-xl text-muted-foreground">
                  An AI-powered marketplace bridging global designers, architects, and creators with artisan communities worldwide. Combining smart tech, visual tools, and cultural heritage — making custom, story-rich design accessible, efficient, and ethical.                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link to="/register">
                    <Button size="lg" className="w-full sm:w-auto">
                      <span>Get Started</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Explore Artisans
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl animate-slide-up">
                <div className="aspect-[4/3] bg-marketplace-purple/20">
                  {/* In production, this would be a real image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-lg text-marketplace-purple">Handcrafted Pottery Collection</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://source.unsplash.com/random/100x100/?potter" 
                      alt="Artisan Avatar"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="text-white">
                      <p className="font-medium">Handmade Clay Pottery by @artisan</p>
                      <div className="flex items-center text-xs">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="content-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our marketplace makes it easy to commission bespoke handcrafted items,
                whether you're looking to buy unique artisan goods or sell your handmade creations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm relative pl-8">
                <div className="step"></div>
                <h3 className="text-xl font-medium mb-2">Share Your Vision</h3>
                <p className="text-muted-foreground">
                  Upload reference images or describe the handcrafted item you're looking for to help artisans understand your needs.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm relative pl-8">
                <div className="step"></div>
                <h3 className="text-xl font-medium mb-2">Connect with Artisans</h3>
                <p className="text-muted-foreground">
                  Browse our marketplace of skilled craftspeople and find the perfect artisan for your custom piece.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm relative pl-8">
                <div className="step"></div>
                <h3 className="text-xl font-medium mb-2">Receive Your Handcrafted Item</h3>
                <p className="text-muted-foreground">
                  Work with your chosen artisan as they create a one-of-a-kind piece made especially for you.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/how-it-works">
                <Button variant="outline">Learn More About Our Process</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-secondary">
          <div className="content-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose ArtIsanal</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform offers a secure, intuitive experience for both buyers and artisan creators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Authentic Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Every item is handcrafted by verified artisans who take pride in their traditional skills and techniques.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <HandMetal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Bespoke Creation</h3>
                <p className="text-muted-foreground">
                  Commission custom pieces tailored to your exact specifications and preferences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Direct Communication</h3>
                <p className="text-muted-foreground">
                  Built-in chat features allow for clear communication between buyers and artisans throughout the creation process.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
          <section className="py-16 bg-marketplace-purple text-black">
            <div className="content-container text-center">
              <h2 className="mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join our artisan marketplace today and commission unique handcrafted items
                or offer your artisanal skills to clients around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register?type=buyer">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto border-black hover:text-gray-700">
                    Join as a Design Consultant
                  </Button>
                </Link>
                <Link to="/register?type=seller">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-black border-black hover:bg-gray-100 hover:text-gray-700 w-full sm:w-auto"
                  >
                    Join as an Artisan
                  </Button>
                </Link>
              </div>
            </div>
          </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
