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
        3º Geração
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline5"
        tokens="h-[2680px] text-white text-2xl leading-10"
      >
        <div className="pt-[58px]">
          <h3>
            Altair 8800 (1975)
          </h3>
          <p>
            Apesar de sua simplicidade, tornou-se extremamente popular entre os entusiastas de computação, impulsionando o surgimento da indústria de computadores pessoais. Sua importância histórica é inegável, já que inspirou uma geração de aficionados por tecnologia e ajudou a pavimentar o caminho para a era dos computadores pessoais. Já tinha um microprocessador.
          </p>
        </div>

        <div className="pt-[398px]">
          <h3>
            APPLE I (1976)
          </h3>
          <p>
            Sua arquitetura baseada no processador MOS 6502 e sua capacidade de expansão de memória proporcionaram uma base sólida para futuros desenvolvimentos na linha de produtos da Apple. Sua simplicidade e acessibilidade também contribuíram para popularizar o conceito de computador pessoal entre entusiastas e consumidores, preparando o terreno para o sucesso futuro da Apple na indústria de tecnologia.
          </p>
        </div>

        <div className="pt-[368px]">
          <h3>
            APPLE II (1977)
          </h3>
          <p>
            Computadores pessoais completos e prontos para uso, diferenciando-se no mercado por sua arquitetura avançada, interface de usuário amigável e recursos inovadores de gráficos e som. Seu sucesso comercial e impacto duradouro ajudaram a estabelecer a Apple como uma líder na indústria de tecnologia. Foi um dos primeiros computadores pessoais a oferecer recursos avançados de gráficos coloridos e som. Isso o tornou ideal para jogos, educação e aplicações multimídia.
          </p>
        </div>

        <div className="pt-[176px]">
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