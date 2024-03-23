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
          name="2º - Funcionais"
          info="1804"
          desc="Grandes Máquinas"
          img="https://i.pinimg.com/736x/75/1f/c5/751fc55da2f3e9f2c47f80f66d3fce2b.jpg"
          pathPage="timeline/functionals"
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
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/DM_IBM_S360.jpg/1200px-DM_IBM_S360.jpg"
          pathPage="timeline/gen2"
        />

        <ChapCard
          name="5º - Terceira Geração"
          info="1964"
          desc="Máquinas de grande porte"
          img="https://tm.ibxk.com.br/2015/05/26/26140720586596.jpg"
          pathPage="timeline/gen3"
        />
      </div>
      <Line />
    </main>
  );
};

export default Timeline;