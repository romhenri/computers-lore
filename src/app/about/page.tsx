'use client'

import { useState } from "react";
import ProfileCard from "@/components/struct/ProfileCard";
import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";
import { Label } from "@/components/base/label"
import { Switch } from "@/components/base/switch"
import { on } from "events";

// @ts-nocheck
const About = () => {
  const [isSeriousMode, setIsSeriousMode] = useState(true);

  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Grupo Desblocados
      </LineTitle>
      <Line />
        <div className="flex items-center justify-between space-x-2">

        <Label 
          htmlFor="airplane-mode"
        >
          <p className="text-xs pr-2">
            Modo Sério
          </p>
        </Label>
        <Switch 
          id="airplane-mode"
          checked={isSeriousMode}
          onCheckedChange={() => setIsSeriousMode(!isSeriousMode)}
        />
          
        </div>
      <Line />

      <div className="flex gap-2 mx-auto justify-start
       flex-col md:flex-row flex-wrap mb-4">
        <ProfileCard 
          name="Rômulo Henrique"
          bio={
            isSeriousMode
              ? "Fullstack Developer | Designer"
              : "Fã do Cristiano Ronaldo (GOAT)"
          }
          image="https://avatars.githubusercontent.com/u/123867521?v=4"
          />

        <ProfileCard
          name="Antônio Carlos"
          bio={
            isSeriousMode
              ? "Pixel Artist | GameDev | Programmer"
              : "Socorrista de Corações Partidos"
          }
          image="https://avatars.githubusercontent.com/u/89984890?v=4"
        />

        <ProfileCard
          name="Ernandes Tavares"
          bio={
            isSeriousMode
              ? "Programmer | Designer"
              : "Último Romântico"
          }
          image="https://avatars.githubusercontent.com/u/131466882?v=4"
        />

        <ProfileCard
            name="Eduardo Tavares"
            bio={
              isSeriousMode
                ? "Programmer"
                : "Tentando Superar Ela"
            }
            image="https://avatars.githubusercontent.com/u/157066609?v=4"
        />

        <ProfileCard
          name="Lucas Rodrigo"
          bio={
            isSeriousMode
              ? "Programmer"
              : "Pro-player de Palavra Cruzada"
          }
          image="https://avatars.githubusercontent.com/u/130937453?v=4"
        />
      </div>

      <Line />
    </main>
  )
};

export default About;