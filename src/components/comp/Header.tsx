import React from 'react';
import HeaderLink from './HeaderLink';
import ToggleTheme from '@/components/comp/ToggleTheme';

const Header = () => {
  return (
      <div className="container mx-auto mt-4 px-4 lg:px-0 border max-w-[1080px] items-center self-center">
        <header className="header flex h-16 shrink-0 items-center justify-between
        px-2 md:px-6">
          <div>
            <h1 className="ml-4">
              Computers Lore
            </h1>
          </div>
          <div className="flex">
            <div className="flex gap-2 mr-4">
              <HeaderLink href="/">
                Início
              </HeaderLink>

              <HeaderLink href="/timeline">
                Linha do Tempo
              </HeaderLink>

              <HeaderLink href="/about">
                Sobre
              </HeaderLink>
            </div> 

            <ToggleTheme/>      
          </div>
        </header>
      </div>
    )
};

export default Header;