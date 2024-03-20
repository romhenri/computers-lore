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

      <div className="flex justify-center">
        <ChapCard
          name="1º - Ancestrais"
          info="5.500 AC"
          desc="Primeiros máquinas de cálculo"
          img="https://img.freepik.com/fotos-premium/abaco-de-madeira-velho-e-antigo-para-contar-e-calcular_1831-703.jpg"
          pathPage="timeline/ancestors"
        />
      </div>
    </main>
  );
};

export default Timeline;