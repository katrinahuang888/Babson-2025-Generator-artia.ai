
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Shield, Image, MessageCircle, Star } from "lucide-react";

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
                  Bring Your Creative <span className="gradient-text">Vision</span> to Life
                </h1>
                <p className="text-xl text-muted-foreground">
                  Commission unique creations or sell your creative skills on our marketplace connecting 
                  vision with talent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link to="/register">
                    <Button size="lg" className="w-full sm:w-auto">
                      <span>Get Started</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Explore Creators
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl animate-slide-up">
                <div className="aspect-[4/3] bg-marketplace-purple/20">
                  {/* In production, this would be a real image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-lg text-marketplace-purple">Marketplace Hero Image</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://source.unsplash.com/random/100x100/?portrait" 
                      alt="Creator Avatar"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div className="text-white">
                      <p className="font-medium">Original Design by @creator</p>
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
                Our marketplace makes it easy to bring your creative ideas to life,
                whether you're looking to buy or sell creative services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm relative pl-8">
                <div className="step"></div>
                <h3 className="text-xl font-medium mb-2">Share Your Vision</h3>
                <p className="text-muted-foreground">
                  Upload reference images or describe your idea to help creators understand what you're looking for.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm relative pl-8">
                <div className="step"></div>
                <h3 className="text-xl font-medium mb-2">Connect with Creators</h3>
                <p className="text-muted-foreground">
                  Browse our marketplace of skilled creators and find the perfect match for your project.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm relative pl-8">
                <div className="step"></div>
                <h3 className="text-xl font-medium mb-2">Receive Your Creation</h3>
                <p className="text-muted-foreground">
                  Work with your chosen creator to refine the project until you're completely satisfied.
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
              <h2 className="mb-4">Why Choose CreatorMarket</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform offers a secure, intuitive experience for both buyers and creators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  Our secure payment system ensures your money is protected until you're satisfied with the work.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Image className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Visual References</h3>
                <p className="text-muted-foreground">
                  Share inspirational images to help creators understand exactly what you're looking for.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Direct Communication</h3>
                <p className="text-muted-foreground">
                  Built-in chat features allow for clear communication between buyers and creators.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-marketplace-purple text-white">
          <div className="content-container text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our creative marketplace today and turn your vision into reality
              or offer your creative skills to clients around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register?type=buyer">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Join as a Buyer
                </Button>
              </Link>
              <Link to="/register?type=seller">
                <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10 w-full sm:w-auto">
                  Join as a Creator
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
