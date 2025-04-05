import React, { ReactNode } from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface OnboardingLayoutProps {
  children: ReactNode;
  title: string;
  step: number;
  totalSteps: number;
}

const OnboardingLayout = ({ children, title, step, totalSteps }: OnboardingLayoutProps) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 bg-gradient-to-b from-background to-secondary/50" style={{ fontFamily: 'Tinos', color: '#313e7f' }}>
      <div className="w-full max-w-3xl animate-fade-in">
        <div className="mb-8 text-center">
          <h1 className="mb-2">{title}</h1>
          <p className="text-muted-foreground">Step {step} of {totalSteps}</p>
        </div>
        
        <Progress value={progress} className="h-2 mb-8" />
        
        <Card className="p-6 md:p-8">
          {children}
        </Card>
      </div>
    </div>
  );
};

export default OnboardingLayout;
