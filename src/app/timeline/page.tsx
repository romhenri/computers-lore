import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";
import ChapCard from "@/components/struct/ChapCard";

const Timeline = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Linha do Tempo
      </LineTitle>
      <Line />

      <div className="flex justify-center gap-4 flex-wrap">
        <ChapCard
          name="1º - Ancestrais"
          info="5.500 AC"
          desc="Primeiros máquinas de cálculo"
          img="https://img.freepik.com/fotos-premium/abaco-de-madeira-velho-e-antigo-para-contar-e-calcular_1831-703.jpg"
          pathPage="timeline/ancestors"
        />

        <ChapCard
          name="3º - Primeira Geração"
          info="1943"
          desc="Computadores eletrônicos"
          img="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/26776_1798DEE935286D54.jpg"
          pathPage="timeline/gen1"
        />

        <ChapCard
          name="4º - Segunda Geração"
          info="1956"
          desc="Transistores e circuitos integrados"
          img="https://upload.wikimedia.org/wikipedia/commons/6/69/IBM_PC_AT.jpg"
          pathPage="timeline/gen2"
        />

        <ChapCard
          name="5º - Terceira Geração"
          info="1964"
          desc="Microprocessadores"
          img="https://www.hardware.com.br/static/20180412/apple-2.jpg"
          pathPage="timeline/gen3"
        />
      </div>
      <Line />
    </main>
  );
};

export default Timeline;