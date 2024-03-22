import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: '500',
  preload: false,
});

const AncestorsPage = () => {
  return (
    <main 
      className={`pt-4 lg:border-x lg:border-b lg:p-4 ${montserrat.className}`}
    >
      <LineTitle>
        2º Geração
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline4"
        tokens="h-[2680px] text-white text-2xl leading-10"
      >
        <div className="pt-[58px]">
          <h3>
            IBM (1964)
          </h3>
          <p>
          Com sua arquitetura modular e compatibilidade entre modelos, proporcionou flexibilidade e proteção de investimento aos usuários. Introduziu conceitos como comprimento de palavra variável e memória virtual, influenciando profundamente o 
          desenvolvimento                    futuro   de computadores. 
          Vendedor ao lado de um modelo IBM.
          </p>
        </div>

        <div className="pt-[480px]">
          <h3>
          IBM 7030 (1961)
          </h3>
          <p>
          Introduzindo a arquitetura de palavra de 64 bits e oferecendo um desempenho significativamente superior aos seus contemporâneos. Embora tenha enfrentado desafios durante o desenvolvimento e tenha tido um número limitado de unidades vendidas devido a atrasos e altos custos, o IBM 7030 estabeleceu importantes precedentes tecnológicos e contribuiu para o avanço da computação de alta performance.
          </p>
        </div>

        <div className="pt-[200px]">
          <h3 className="pl-[38px]">
            IBM 7030 (1961)
          </h3>
          <p>
          Introduzindo a arquitetura de palavra de 64 bits e oferecendo um desempenho significativamente superior aos seus contemporâneos. Embora tenha enfrentado desafios durante o desenvolvimento e tenha tido um número limitado de unidades vendidas devido a atrasos e altos custos, o IBM 7030 estabeleceu importantes precedentes tecnológicos e contribuiu para o avanço da computação de alta performance.
          </p>
        </div>

        <div className="pt-[310px]">

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
  );
};

export default AncestorsPage;