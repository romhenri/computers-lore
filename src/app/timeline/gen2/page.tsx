import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
import Link from 'next/link';
import { Montserrat, Bebas_Neue, Koulen, League_Gothic } from "next/font/google";

const montserrat = Montserrat({
  weight: '500',
  preload: false,
});

const bebasneue = Bebas_Neue({
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
        2º Geração
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline4"
        tokens="h-[2680px] text-white text-2xl leading-10"
      >
        <div className="pt-[58px] ">
           <h3 className={`text-[3rem] ${koulen.className} text-center`}>
            <span className="ml-[24px] border-b-4 border-sky-500 inline-block">
            IBM/360 (1964)
            </span>
           </h3>
          <p className={`pt-[40px] text-right text-sky-100`}>
          Com sua arquitetura modular e compatibilidade entre modelos, proporcionou flexibilidade e proteção de investimento aos usuários. Introduziu conceitos como comprimento de palavra variável e memória virtual, influenciando profundamente o 
          desenvolvimento<br/> futuro de computadores.<br/> 
          Vendedor ao lado de<br/> um modelo IBM.<br/>
          </p>
        </div>

        <div className="pt-[380px]">
          <div className={`ml-5 text-[1.5rem] ${league.className} `}>
            Conheça
            <h3 className={`ml-[0px] text-[2.5rem] ${koulen.className} text-sky-400`}>
            IBM 7030 (1961)
            </h3 >
          </div>
          <p className={`ml-5 pt-[30px] text-sky-100`}>
          Introduzindo a arquitetura de palavra de 64 bits e oferecendo um desempenho superior aos seus contemporâneos. Embora tenha enfrentado desafios durante o desenvolvimento e tenha tido um número limitado de unidades vendidas devido a atrasos e altos custos, o IBM 7030 estabeleceu importantes precedentes tecnológicos e contribuiu para o avanço da computação de alta performance.
          </p>
        </div>

        <div className="pt-[200px]">
          <h3 className={`pl-[24px] text-[2.5rem] ${koulen.className} text-neutral-200 `}>
            PDP-8<span className={`text-sky-400`}> (1965)</span >
          </h3>
          <p className={`ml-5 pt-[30px] text-blue-100`}>
          Foi notável por seu tamanho compacto, preço acessível e simplicidade de arquitetura. Sua introdução democratizou o acesso à computação, tornando-a viável para empresas, universidades e laboratórios de pesquisa. Apesar de sua simplicidade em comparação com os mainframes da época, sua influência duradoura e
          contribuição para o desenvolvimento
          da computação pessoal
          são inegáveis.
          </p>
        </div>

        <div className="pt-[270px]">

          <Link href="/timeline">
            <Button 
              className="w-full bg-blue-600"
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