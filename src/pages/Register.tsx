import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Register = () => {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get('type');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 bg-gradient-to-b from-background to-secondary/50">
        <div className="w-full">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>Create Your Account</h1>
            <p className="text-muted-foreground mt-2" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
              Join CreatorMarket to {userType === 'buyer' ? 'commission creative work' : 
                userType === 'seller' ? 'sell your creative services' : 
                'start buying or selling creative work'}
            </p>
          </div>
          
          <AuthForm type="register" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;