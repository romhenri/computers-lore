import React from 'react';
import HeaderLink from '@/components/comp/HeaderLink';
import { Home, SquareGantt, Users } from 'lucide-react';

const MobileMenu = () => {
  return (
    <div className="container mx-auto mt-0 pt-2 border items-center self-center rounded-none w-full
    min-[500px]:hidden
    fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] shadow-md
    ">
      <header className="header flex py-2 shrink-0 items-center justify-between flex-wrap">
      <HeaderLink 
          href="/"
          >
          <div>
            <Home className="h-6 w-6" />
          </div>
        </HeaderLink>

        <HeaderLink 
          href="/timeline"
          >
          <div>
            <SquareGantt className="h-6 w-6" />
          </div>
        </HeaderLink>
  
        <HeaderLink 
          href="/about"
          >
          <div>
            <Users className="h-6 w-6" />
          </div>
        </HeaderLink>
      </header>
    </div>
    )
};

export default MobileMenu;