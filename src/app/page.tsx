import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/base/button';
import { Line } from "@/components/base/line";

export default function Home() {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <section 
        className="flex p-12 justify-between border rounded mb-4 gap-8 flex-wrap lg:flex-nowrap lg:p-16"
      >
        <div>
          <h1 className="mb-2
          text-3xl 
          lg:text-5xl lg:leading-[3.5rem]
          ">
            Conheça a 
            <br />
            História 
            dos 
            <br />
            Computadores
          </h1>
          <p className="text-neutral-500">
            Aprendizado dinâmico e interativo!
          </p>

          <Link href={"/timeline"}>
            <Button 
              className="mt-8 w-48 h-8"
              variant="outline"
              >
              Começar
            </Button>
          </Link>
        </div>
        <div>
          <Image
            className="rounded-lg w-80"
            src="/assets/images/turing-generated-by-ia.jpg"
            alt="Turing generated by IA"
            priority
            width={500}
            height={500}
          />
        </div>
      </section>

      <section 
        className="flex p-12 border gap-8 rounded mb-4
        flex-wrap lg:p-12 justify-between
        lg:flex-nowrap lg:items-center lg:gap-24
        "
      >
        <div>
          <h2 className="text-xl">
            Conheça o sistema Binário!
          </h2>
          <p className="text-neutral-500">
            Contamos com uma ferramenta para converter números decimais em binários.
          </p>

        </div>
        <div>
          <Link href={"/binary"}>
            <Button variant="outline" className="px-12">
              Sobre Binário
            </Button>
          </Link>
        </div>
      </section>

      <section className="flex p-12 border gap-8 rounded
        flex-wrap lg:p-12 justify-between mb-4
        lg:flex-nowrap lg:items-center lg:gap-24
        ">
        <div className="border-b border-r p-4 rounded lg:mb-4">
          <h2 className="text-2xl w-36">
            Objetivo
          </h2>
        </div>
        <p className="text-neutral-500">
          Este projeto tem como objetivo de ensinar sobre computadores de forma interessante. Abordando a história, curiosidades e arquitetura dos computadores.
        </p>
      </section>

      <section className="flex p-12 border gap-8 rounded
        flex-wrap lg:p-12 justify-between mb-4
        lg:flex-nowrap lg:items-center lg:gap-24
        ">
        <div className="border-b border-r p-4 rounded lg:mb-4">
          <h2 className="text-2xl w-36">
            Motivação
          </h2>
        </div>
        <p className="text-neutral-500">
          Projeto desenvolvido para a disciplina de Introdução a Ciência da Computação ministrada pela <strong>Dra. Thaís Gaudêncio</strong> na UFPB.
        </p>
      </section>

      <section className="flex p-12 border gap-8 rounded
        flex-wrap lg:p-12 justify-between mb-4
        lg:flex-nowrap lg:items-center lg:gap-24
        ">
        <div className="border-b border-r p-4 rounded lg:mb-4">
          <h2 className="text-2xl w-36">
            Justificativa
          </h2>
        </div>
        <p className="text-neutral-500">
          É de fundamental para todo cientista da computação conhecer a história e princípais fundamentos dos computadores. 

          <Link
            href="/map"
            className="text-primary-500 underline pl-2"
          >
            Conheça o mapa de carreiras.
          </Link>
        </p>
      </section>

      <section 
        className="flex p-12 border gap-8 rounded
        flex-wrap lg:p-12 justify-between
        lg:flex-nowrap lg:items-center lg:gap-24
        "
      >
        <div>
          <h2 className="text-xl">
            Você pode ajudar a melhorar a plataforma!
          </h2>
          <p className="text-neutral-500">
            Se identificando ou de forma anônima.
          </p>

        </div>
        <div>
          <Link href={"/rating"}>
            <Button variant="outline" className="px-12">
              Fazer Avaliação
            </Button>
          </Link>
        </div>
      </section>
      <Line />
    </main>
  );
};