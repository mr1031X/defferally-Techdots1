"use client"
import SideNav from '@/src/app/ui/dashboard/sidenav';
import TopNav from '../ui/dashboard/topnav';
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [hideNav, setHideNav] = useState(false);

  // Callback function to update hideNav state
  const updateHideNav = (value: boolean) => {
    setHideNav(value);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-1/4 flex-none md:w-64">
        <SideNav />
      </div>
      <div className="w-3/4 flex-none pr-2 md:overflow-y-auto md:pr-2">
        <TopNav hideNav={hideNav} />
        <div>{React.cloneElement(children as React.ReactElement, { updateHideNav })}</div>
      </div>
    </div>
  );
}
