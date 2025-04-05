
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { UserCircle, Palette } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="content-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <h2 className="text-2xl font-bold gradient-text text-[#313e7f]">ArtIsanal</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-[#313e7f]">
              How It Works
            </Link>
            <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors text-[#313e7f]">
              Explore Artisans
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="hidden sm:inline-flex">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="hidden sm:inline-flex bg-[#313e7f] hover:bg-[#2b366f] text-white">Get Started</Button>
          </Link>
          <Link to="/login" className="sm:hidden">
            <UserCircle className="h-6 w-6 text-marketplace-terracotta" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
