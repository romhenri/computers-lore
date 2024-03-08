import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="border-x border-b">
      <section 
        className="flex p-12 justify-between border rounded mb-2 gap-8 flex-wrap lg:flex-nowrap lg:p-20"
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
        </div>
        <div>
          <Image
            className="rounded-lg w-80"
            src="/assets/images/turing-generated-by-ia.jpg"
            alt="Turing generated by IA"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section 
        className="flex p-16 border gap-24 items-center"
      >
        <div>
          <h2 className="text-xl">
            Você poder ajudar a melhorar a plataforma!
          </h2>
          <p className="text-neutral-500">
            Se identificando ou de forma anônima.
          </p>

        </div>
        <div>
          <Link href={"/rating"}>
            <Button variant="outline">
              Fazer Avaliação
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};