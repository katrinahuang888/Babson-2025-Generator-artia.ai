
import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 bg-gradient-to-b from-background to-secondary/50">
        <div className="w-full">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">
              Log in to your ArtisanMarket account
            </p>
          </div>
          
          <AuthForm type="login" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
