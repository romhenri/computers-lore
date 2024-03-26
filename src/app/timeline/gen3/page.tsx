import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
import { Montserrat, Gugi } from "next/font/google";

const montserrat = Montserrat({
  weight: '500',
  preload: false,
});

const gugi = Gugi({
  weight: '400',
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
        <div className=" pt-[58px]">
        <h3 className={`text-[2rem] ${gugi.className} text-2xl pb-[10px] text-yellow-200`}>
         <span className="border-b-4 border-violet-400">
         Altair 8800 (1975)
         </span>
        </h3>
          <p className={'pt-[48px] text-violet-100'}>
            Apesar de sua simplicidade, tornou-se extremamente popular entre os entusiastas de computação, impulsionando o surgimento <br/>da indústria de computadores pessoais. Sua importância histórica<br/> é inegável, já que inspirou uma geração de aficionados por <br/>tecnologia e ajudou a pavimentar o caminho para era dos computadores pessoais. A partir disso, os computadores ja continham <br/>um microprocessador.
          </p>
        </div>

        <div className=" pt-[300px]">
          <h3 className={`text-[2rem]  ${gugi.className} text-2xl pb-[10px] text-violet-400 text-left`}>
          <span className="ml-5 border-b-4 border-yellow-200">
           APPLE I(1976)
           </span>
          </h3>
          <p className={' pt-[25px] text-violet-100 text-left'}>
            Sua arquitetura baseada no processador MOS 6502 e sua capacidade de expansão de memória proporcionaram uma base sólida para futuros desenvolvimentos na linha de produtos da Apple. Sua simplicidade e acessibilidade também contribuíram para popularizar o conceito de computador pessoal entre entusiastas e consumidores, preparando o terreno para o sucesso futuro da Apple na indústria de tecnologia.
          </p>
        </div>

        <div className="pt-[320px]">
        <h3 className={`text-[2rem] ${gugi.className} text-2xl pb-[10px] text-violet-400`}>
         <span className="ml-5 border-b-4 border-yellow-200">
         APPLE II(1977)
         </span>
        </h3>
          <p className={'ml-5 pt-[25px] text-indigo-100'}>
            Computadores pessoais completos e prontos para uso, diferenciando-se no mercado por sua arquitetura avançada, interface de usuário amigável e recursos inovadores de gráficos e som. Seu sucesso comercial e impacto duradouro ajudaram a estabelecer a Apple como uma líder na indústria de tecnologia. Foi um dos primeiros computadores pessoais a oferecer recursos avançados de gráficos coloridos e som. <br/>Isso o tornou ideal para <br/>jogos, educação e <br/>aplicações multimídia.
          </p>
        </div>

        <div className="pt-[105px] hidden">
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