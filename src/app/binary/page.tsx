import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";
import TabsConverter from "./tabs-converter";

const About = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Valores em Binário
      </LineTitle>
      <Line />
      
      <div>
        <p className="text-neutral-500">
          O sistema binário é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, 0 e 1.

          O sistema binário é a base para a aritmética computacional e é utilizado em todos os dispositivos digitais, como computadores, smartphones, tablets, etc.
        </p>
      </div>

      <Line />

      <TabsConverter />
    </main>
  );
};

export default About;