import React from 'react';

export interface ServiceModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  experience: string[];
  image: string;
}

export interface PainPoint {
  id: number;
  question: string;
}