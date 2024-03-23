import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
import { Montserrat, Grenze } from "next/font/google";

const montserrat = Montserrat({
  weight: '500',
  preload: false,
});

const grenze = Grenze({
  weight: '600',
  preload: false,
});

const AncestorsPage = () => {
  return (
    <main className={`pt-4 lg:border-x lg:border-b lg:p-4 ${montserrat.className}`}>
      <LineTitle>
        1º Ancestrais
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline1"
        tokens="h-[2205px] text-black text-xl leading-10"
      >
        <div>
          <div className="pt-[50px]">
            <h3 className={`underline text-[2rem] ${grenze.className} text-2xl pb-[10px]`}>
              Ábaco (5.500 AC)
            </h3>
            Há milênios, antes mesmo da escrita, o ábaco surgiu como uma ferramenta rudimentar para cálculos.
            <br/>
            Com suas contas deslizantes, ele representou o primeiro passo na evolução dos dispositivos de computação, facilitando a matemática e o comércio em civilizações antigas.
          </div>

          <div className="absolute z-10 pt-[250px]">
            <h3 className={`underline text-[2rem] ${grenze.className} text-2xl pb-[10px]`}>
              Pascalina (1642)
            </h3>
            Criada pelo matemático e filósofo Blaise Pascal, a Pascaline realizava operações aritméticas básicas, como adição e subtração, através de engrenagens e rodas dentadas.
            <br/>
            Início da automação dos cálculos, contribuindo para o desenvolvimento posterior das calculadoras e computadores modernos com suas operações mecânicas.
          </div>

          <div className="absolute z-20 pt-[1130px] pr-[20px] text-right">
            <h3 className={`underline text-[2rem] ${grenze.className} text-2xl pb-[10px]`}>
              Roda de Leibniz (1673)
            </h3>
            Essa foi uma tentativa inovadora de criar uma máquina de cálculo capaz de multiplicação e divisão. Com seus cilindros numerados <br /> e  sistema de engrenagens,  a <br /> Roda de Leibniz antecipou <br /> conceitos essenciais da <br /> computação, como a <br /> representação binária <br /> e a lógica booleana.
          </div>

          <div className="pt-[374px] hidden">
            <Link href="/timeline">
              <Button 
                className="w-full"
                variant="secondary"
              >
                Concluir Capítulo
              </Button>
            </Link>
          </div>
        </div>
      </Timeline>
    </main>
  )
};

export default AncestorsPage;