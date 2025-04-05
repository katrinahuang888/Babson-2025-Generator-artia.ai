import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, MessageSquare, Star, DollarSign, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Creator Dashboard</h1>
              <p className="text-muted-foreground">Manage your commissions and client projects</p>
            </div>
            
            <div>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Profile Settings
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">0</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">New Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">0</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">-</div>
                  <Star className="h-4 w-4 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">$0.00</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Requests</CardTitle>
                  <CardDescription>Commission requests from potential clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You don't have any order requests yet.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Order requests will appear here when clients are interested in your work.
                  </p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Active Orders</CardTitle>
                  <CardDescription>Projects you're currently working on</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You don't have any active orders.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    Here you'll see orders that are in progress.
                  </p>
                </CardFooter>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Your latest client conversations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No recent messages.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" disabled>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    View Messages
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Portfolio</CardTitle>
                  <CardDescription>Showcase your work to attract clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((index) => (
                      <div key={index} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <p className="text-xs text-muted-foreground">Image {index}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Manage Portfolio
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Creator Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-marketplace-purple" />
                    <CardTitle className="text-lg">Managing Time Effectively</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Learn how to manage your time effectively with multiple projects</p>
                </CardContent>
                <CardFooter>
                  <Link to="/creator-guidelines" className="w-full">
                    <Button variant="link" className="w-full justify-start p-0">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-marketplace-purple" />
                    <CardTitle className="text-lg">Communicating with Clients</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tips for clear and effective communication with clients</p>
                </CardContent>
                <CardFooter>
                  <Link to="/creator-guidelines" className="w-full">
                    <Button variant="link" className="w-full justify-start p-0">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-marketplace-purple" />
                    <CardTitle className="text-lg">Pricing Your Work</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">How to price your creative services competitively</p>
                </CardContent>
                <CardFooter>
                  <Link to="/creator-guidelines" className="w-full">
                    <Button variant="link" className="w-full justify-start p-0">
                      Read Guide
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

export default SellerDashboard;