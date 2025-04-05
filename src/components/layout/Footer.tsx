
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto py-8">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">ArtIsanal</h3>
            <p className="text-sm text-muted-foreground">
              The marketplace connecting customers with skilled artisans creating handcrafted treasures.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">For Buyers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/create-request" className="text-muted-foreground hover:text-foreground transition-colors">
                  Commission an Artisan
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Artisans
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">For Artisans</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/become-creator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Become an Artisan
                </Link>
              </li>
              <li>
                <Link to="/creator-guidelines" className="text-muted-foreground hover:text-foreground transition-colors">
                  Artisan Guidelines
                </Link>
              </li>
              <li>
                <Link to="/seller-dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Artisan Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 ArtIsanal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
