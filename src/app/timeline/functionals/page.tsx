import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
import { Montserrat,Grenze,Bebas_Neue,League_Gothic } from "next/font/google";


const montserrat = Montserrat({
  weight: '500',
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
        2º Funcionais
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline2-t"
        tokens="h-[2680px] text-white text-2xl leading-10"
      >
        <div className="pt-[58px] ">
          <h3  className={`underline text-[2rem] ${bebasneue.className} text- 2xl pb-[-30px] decoration-orange-500`}>
        
            Tear Jacquard (1804)
            
          </h3>
          <p className={`${leaguegothic.className} text-[1.8rem]`}>
             
            Revolucionou a indústria têxtil ao introduzir um método de programação baseado em cartões perfurados. Esses cartões controlavam o padrão de tecelagem, permitindo uma produção mais eficiente e flexível de tecidos complexos. Essa inovação influenciou o desenvolvimento posterior da computação, servindo como precursor dos sistemas de programação e automação utilizados nos primeiros computadores.
           
          </p>
        </div>

        <div className="pt-[600px]">
          <h3  className={`underline text-[2rem] decoration-white ${bebasneue.className} text- 2Xl pb-[-30px] text-orange-500 `}>
            Máquina Diferencial (1882)
          </h3>
          <p  className={`${leaguegothic.className} text-[1.8rem]`}>
            
            Revolucionou a indústria têxtil ao introduzir um método de programação baseado em cartões perfurados. Esses cartões controlavam o padrão de tecelagem, permitindo uma produção mais eficiente e flexível de tecidos complexos. Essa inovação influenciou o desenvolvimento posterior da computação, servindo como precursor dos sistemas de programação e automação utilizados nos primeiros computadores.
            
          </p>
        </div>

        <div className="pt-[540px]">
          <h3  className={`underline text-[2rem] ${bebasneue.className} text-2xl pb-[10px]`}>
            <span className={`text-orange-500`}>
              Máquina</span> Analítica &nbsp;
              <span className={`text-orange-500`}>
               (1837)</span>
          </h3>
          <p className={`${leaguegothic.className} text-[1.8rem]`}>
           
          Era um computador mecânico programável, usando cartões perfurados para programação. Podia realizar qualquer operação matemática, tinha o moinho(CPU) , o armazém, o leitor e a impressora. Apesar de não ter sido totalmente construída, foi a primeira máquina que mereceu ser chamada de computador.
       
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