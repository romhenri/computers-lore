import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
import { Montserrat,Grenze,Bebas_Neue,League_Gothic, Khand } from "next/font/google";


const montserrat = Montserrat({
  weight: '500',
  preload: false,
});

const khand = Khand({
  weight: '400',
  preload: false,
});

const grenze = Grenze({
  weight: '600',
  preload: false,
});

const bebasneue = Bebas_Neue({
  weight: '400',
  preload: false,
});

const  leaguegothic =  League_Gothic({
  weight: '400',
  preload: false,
});

const AncestorsPage = () => {
  return (
    <main  className={`pt-4 lg:border-x lg:border-b lg:p-4 ${montserrat.className}`}
    >
      <LineTitle>
         Funcionais
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline2"
        tokens="h-[2680px] text-white text-2xl leading-10"
      >
        <div className="pt-[70px] pl-[28px] ">
          <h3  className={`underline text-[2.2rem] ${bebasneue.className} text- 2xl pb-[-30px] decoration-orange-500 text-center text-neutral-300`}>
        
            Tear Jacquard (1804)
            
          </h3>
          <p className={`${leaguegothic.className} text-[1.8rem] pt-[58px] text-neutral-300 text-center`}>
             
            Revolucionou a indústria têxtil ao introduzir um método de programação baseado em cartões perfurados. Esses cartões controlavam o padrão de tecelagem, permitindo uma produção mais eficiente e flexível de tecidos complexos. Essa inovação influenciou o desenvolvimento posterior da computação, servindo como precursor dos sistemas de programação e automação utilizados nos primeiros computadores.
           
          </p>
        </div>

        <div className="pt-[600px]">
          <h3  className={`underline text-[2rem] decoration-white ${bebasneue.className} text- 2Xl pb-[-30px] text-orange-500 pr-[78px] text-right`}>
            Máquina Diferencial (1820)
          </h3>
          <p  className={`${leaguegothic.className} text-[1.8rem] pr-[38px] pt-[30px] text-right text-neutral-300`}>
            
          Projetada para calcular tabelas de funções matemáticas, sua importância reside na introdução de conceitos fundamentais de computação, como armazenamento de dados e execução de operações automáticas.  Embora nunca tenha sido concluída durante a vida de Babbage, sua ideia inspirou o desenvolvimento subsequente dos computadores modernos. <span className={` text-sky-200`}><br/>Em matemática, os termos verdadeiro e falso estão bem definidos. Mas na computação, nós lidamos com estados intermediários de quase<br/> certo e quase errado.<br/>- Charles Babbage</span>
          </p>
        </div>

        <div className="pt-[240px]">
          <h3  className={` text-[2rem] ${bebasneue.className} text-2xl pb-[10px] pl-[38px]`}>
            <span className={`text-orange-500  border-b-4 border-blue-800 inline-block `}>
              Máquina Analítica</span>
              <span className={`text-orange-500 border-b-4 border-blue-800 inline-block `}>
               (1837)</span>
          </h3>
          <p className={`${khand.className} text-[1.5rem] pt-[18px] pl-[38px] text-neutral-300`}>
           
          Era um computador mecânico programável, usando cartões perfurados para programação. Podia realizar qualquer operação matemática, tinha o moinho(CPU), o armazém, o leitor e a impressora. Apesar de não ter sido totalmente construída, foi a primeira máquina que mereceu ser chamada de computador.<br/> <h1 className={` pt-[28px] text-[1.5rem] ${khand.className} text-orange-600`}> Após isso, a evolução dos computadores começou de forma mais acelerada, tomando grandes ritmos.</h1>
       
          </p>
        </div>
        
        <div className="pt-[255px]">
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