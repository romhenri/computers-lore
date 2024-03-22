import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
// Improt font form google
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
        1º Ancestrais
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline3"
        tokens="h-[2680px] text-white text-2xl leading-10"
      >
        <div className="pt-[58px] pl-[48px]">
          <h3>
            ENIAC (1945)
          </h3>
          <p>
          Foi o primeiro computador eletrônico de grande escala. Utilizando válvulas eletrônicas, revolucionou ao realizar cálculos de forma mais rápida e eficiente.
          <br></br>
          <br></br>
          Podia ser programado através de um conjunto complexo de interruptores e cabos, o que exigia uma grande quantidade de trabalho manual para alterar sua funcionalidade.
          </p>
        </div>

        <div className="pt-[145px] pl-[48px]">
          <h3 className="">
            A partir daqui  a computação não foi mais a mesma...
          </h3>
          <p>
            Inovações como:
          </p>
          <ol>
            <li> Programação Manual</li>
            <li> Armazenando Eletronicamente</li>
            <li> Cálculos Avançados</li>
          </ol>
        </div>

        <div className="pt-[230px] pl-[48px]">
          <h3 className="">
            Colossus I (1943)
          </h3>
          <p>
          Entrou em operação em e desempenhou um papel crucial na decifração dos códigos de comunicação alemães. Sua arquitetura inovadora, utilizando válvulas eletrônicas.
          Além de influenciar o campo da criptoanálise e da tecnologia da informação.
          </p>
        </div>

        <div className="pt-[260px] pl-[28px]">
          <h3 className="">
            Colossus II (1944)
          </h3>
          <p>
            Implementação de uma arquitetura paralela, permitindo que várias tarefas fossem realizadas simultaneamente. Além disso, capacidade de processamento aprimorada, com velocidade e eficiência aprimoradas. O design do Colossus Mark II também foi simplificado em comparação com o Colossus original, o que ajudou a melhorar sua confiabilidade e facilidade de manutenção.
          </p>
        </div>

        <div className="pt-[240px]">

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