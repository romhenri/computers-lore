import React from 'react';
import HeaderLink from './HeaderLink';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
      <div className="container mx-auto mt-4 px-4 md:px-6 lg:px-8 border">
        <header className="flex h-20 w-full shrink-0 items-center justify-center
         px-4 md:px-6">
          <div className="flex gap-2">

            <HeaderLink href="/">
              Início
            </HeaderLink>

            <HeaderLink href="/timeline">
              Linha do Tempo
            </HeaderLink>

            <HeaderLink href="/about">
              Sobre
            </HeaderLink>

            <Button className="justify-self-end px-2 py-1 text-xs" variant="outline">
              Avalie!
            </Button>          
          </div>
        </header>
      </div>
    )
}

export default Header;