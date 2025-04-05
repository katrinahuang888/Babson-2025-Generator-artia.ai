import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Settings } from "lucide-react";
import { Link } from 'react-router-dom';

const BuyerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Buyer Dashboard</h1>
              <p className="text-muted-foreground">Manage your commissions and creative projects</p>
            </div>
            
            <div className="flex gap-3">
              <Link to="/create-request">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Request
                </Button>
              </Link>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Your ongoing commissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You don't have any active projects yet.</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/create-request" className="w-full">
                  <Button className="w-full">Start a New Project</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recommended Creators</CardTitle>
                <CardDescription>Based on your interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                    <div>
                      <p className="font-medium">Creator Name</p>
                      <p className="text-xs text-muted-foreground">Digital Art, Character Design</p>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                    <div>
                      <p className="font-medium">Creator Name</p>
                      <p className="text-xs text-muted-foreground">Illustration, Logo Design</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/explore" className="w-full">
                  <Button variant="outline" className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Explore All Creators
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Your latest conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No recent messages.</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" disabled>
                  View All Messages
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Help</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Create a Request</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Learn how to create an effective commission request</p>
                </CardContent>
                <CardFooter>
                  <Link to="/how-it-works" className="w-full">
                    <Button variant="link" className="w-full justify-start p-0">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Finding the Right Creator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tips for choosing the perfect creator for your project</p>
                </CardContent>
                <CardFooter>
                  <Link to="/how-it-works" className="w-full">
                    <Button variant="link" className="w-full justify-start p-0">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Get Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Need help with your account or a project?</p>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button variant="link" className="w-full justify-start p-0">
                      Contact Support
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BuyerDashboard;