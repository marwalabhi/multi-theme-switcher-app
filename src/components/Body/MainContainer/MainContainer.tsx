import React from 'react';
import type { ReactNode } from 'react';

interface MainContainerProps {
  children?: ReactNode;
  className?: string;
}

const MainContainer = ({ children, className = '' }: MainContainerProps) => {
  return <main className={`main-container ${className}`}>{children}</main>;
};

export default MainContainer;
