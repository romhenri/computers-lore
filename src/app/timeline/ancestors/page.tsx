import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
// Improt font form google
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
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
        tokens="h-[2205px] text-black text-2xl leading-10"
      >
        <div className="pt-[50px]">
          Há milênios, antes mesmo da escrita, o ábaco surgiu como uma ferramenta rudimentar para cálculos.
          <br/><br/>
          Com suas contas deslizantes, ele representou o primeiro passo na evolução dos dispositivos de computação, facilitando a matemática e o comércio em civilizações antigas.
        </div>

        <div className="pt-[186px]">
          Criada pelo matemático e filósofo Blaise Pascal, a Pascaline realizava operações aritméticas básicas, como adição e subtração, através de engrenagens e rodas dentadas.
          <br/><br/>
          Início da automação dos cálculos, contribuindo para o desenvolvimento posterior das calculadoras e computadores modernos.
        </div>

        <div className="pt-[450px] text-right">
        O abaco surgiu com a ideia de facilitar as contas pra muita gente e fazer calculos das mais diversas formas, introduzinho a ideia de automatizaçõa de tarefas simples e sendo considera o primeiro computador.
        </div>

        <div className="pt-[374px]">
          <Link href="/timeline">
            <Button 
              className="w-full"
              variant="secondary"
            >
              Concluir Capítulo
            </Button>
          </Link>
        </div>
      </Timeline>
    </main>
  )
};

export default AncestorsPage;