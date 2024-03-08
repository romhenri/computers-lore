import React from 'react';
import HeaderLink from './HeaderLink';
import ToggleTheme from '@/components/comp/ToggleTheme';

const Header = () => {
  return (
      <div className="container mx-auto mt-4 lg:px-0 border max-w-[1080px] items-center self-center rounded">
        <header className="header flex py-4 shrink-0 items-center justify-between flex-wrap
        px-2 lg:h-16 lg:px-6 lg:py-2">
          <div>
            <h1 className="ml-4 mb-2 lg:mb-0">
              Computers Lore
            </h1>
          </div>
          <div className="flex items-center self-center">
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