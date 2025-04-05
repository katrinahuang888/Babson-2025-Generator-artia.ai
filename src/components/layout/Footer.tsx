
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto py-8">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">CreatorMarket</h3>
            <p className="text-sm text-muted-foreground">
              The marketplace connecting creative vision with skilled creators.
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
                  Create a Request
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Creators
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/become-creator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link to="/creator-guidelines" className="text-muted-foreground hover:text-foreground transition-colors">
                  Creator Guidelines
                </Link>
              </li>
              <li>
                <Link to="/seller-dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Seller Dashboard
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
          <p>© 2025 CreatorMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
