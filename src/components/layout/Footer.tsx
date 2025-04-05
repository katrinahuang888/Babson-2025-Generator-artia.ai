import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto py-8">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text text-[#313e7f] font-tinos">Artisanal</h3>
            <p className="text-sm text-muted-foreground font-tinos">
              The marketplace connecting customers with skilled artisans creating handcrafted treasures.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 font-tinos">For Buyers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/create-request" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  Commission an Artisan
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  Browse Artisans
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 font-tinos">For Artisans</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/become-creator" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  Become an Artisan
                </Link>
              </li>
              <li>
                <Link to="/creator-guidelines" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  Artisan Guidelines
                </Link>
              </li>
              <li>
                <Link to="/seller-dashboard" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  Artisan Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 font-tinos">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors font-tinos">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground font-tinos">
          <p>© 2025 Artisanal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;