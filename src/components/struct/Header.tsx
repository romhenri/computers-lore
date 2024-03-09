import React from 'react';
import HeaderLink from '@/components/comp/HeaderLink';
import ToggleTheme from '@/components/struct/ToggleTheme';

const Header = () => {
  return (
      <div className="container mx-auto mt-0 pt-4 border  items-center self-center rounded-none w-auto
      lg:max-w-[1080px] lg:rounded lg:px-0 lg:mt-4 lg:pt-0
      ">
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