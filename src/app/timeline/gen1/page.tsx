import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
import { Montserrat, Bebas_Neue, Koulen, League_Gothic, Krona_One, Kufam, Gugi, Khand } from "next/font/google";

const montserrat = Montserrat({
  weight: '500',
  preload: false,
});

const bebasneue = Bebas_Neue({
  weight: '400',
  preload: false,
});

const khand = Khand({
  weight: '400',
  preload: false,
});

const gugi = Gugi({
  weight: '400',
  preload: false,
});

const kufam = Kufam({
  weight: '400',
  preload: false,
});

const krona = Krona_One({
  weight: '400',
  preload: false,
});

const koulen = Koulen({
  weight: '400',
  preload: false,
});

const league = League_Gothic({
  weight: '400',
  preload: false,
});

const AncestorsPage = () => {
  return (
    <main 
      className={`pt-4 lg:border-x lg:border-b lg:p-4 ${montserrat.className}`}
    >
      <LineTitle>
        1º Geração
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline3"
        tokens="h-[2680px] text-white text-2xl leading-10"
      >
        <div className="pt-[55px] pl-[58px]">
          <h3 className={` text-[2.5rem] ${koulen.className} text-neutral-200`}>
            <span className=" border-b-4 border-green-600 inline-block">
             Eniac (1945)
            </span>
          </h3>
          <p className={`pt-[23px] text-neutral-200 `}>
          Foi o primeiro computador eletrônico de grande escala. Utilizando válvulas eletrônicas, revolucionou ao realizar cálculos de forma mais rápida e eficiente.
          <br></br>
          <br></br>
          Podia ser programado através de um conjunto complexo de interruptores e cabos, o que exigia uma grande quantidade de trabalho manual para alterar sua funcionalidade.
          </p>
        </div>

        <div className="pt-[120px]">
          <h3 className={`${krona.className} text-center text-green-600`}>
            A partir daqui a computação não foi mais a mesma...
          </h3>
          <p className={`${kufam.className} pl-[28px]`}>
            Inovações como:
          </p>
          <ol className={`${kufam.className} pl-[38px]`}>
            <li> -Programação<span className={`text-lime-200 `}> Manual</span></li>
            <li> -Armazenando<span className={`text-lime-200`}> Eletronicamente</span></li>
            <li> -Cálculos<span className={`text-lime-200`}> Avançados</span></li>
          </ol>
        </div>

        <div className="pt-[225px]">
          <h3 className={` pl-[28px] text-[2.5rem] ${koulen.className}`}>
            Colossus I<span className={`text-green-600 `}> (1943)</span>
          </h3>
          <p className={`pl-[28px] pt-[5px] text-[1.8rem] ${khand.className} text-green-100`}>
          Entrou em operação em e desempenhou um papel crucial na decifração dos códigos de comunicação alemães. Sua arquitetura inovadora, utilizando válvulas eletrônicas.
          Além de influenciar o campo da criptoanálise e da tecnologia da informação.<br/>
          </p>
          <h2 className={`${khand.className} text-[1.8rem]  text-green-400 pl-[28px]
          `}>
            "Não podemos esperar que uma máquina nos dê uma resposta,<br/>  sem antes fornecermos<br/>  a ela uma pergunta<br/>  adequada." - Alan Turing
          </h2>
        </div>

        <div className="pt-[160px] pl-[28px]">
          <h3 className={` text-[2.4rem] ${koulen.className} text-green-600 text-center`}>
            <span className=" border-b-4 border-green-100 inline-block ">
             Colossus II (1944)
            </span>
          </h3>
          <p className={`pt-[20px] text-neutral-200`}>
            Implementação de uma arquitetura paralela, permitindo que várias tarefas fossem realizadas simultaneamente. Além disso, capacidade de processamento aprimorada, com velocidade e eficiência aprimoradas. O design do Colossus Mark II também foi simplificado em comparação com o Colossus original, o que ajudou a melhorar sua confiabilidade e facilidade de manutenção.
          </p>
        </div>

        <div className="pt-[200px]">

          <Link href="/timeline">
            <Button 
              className="w-full bg-green-800"
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