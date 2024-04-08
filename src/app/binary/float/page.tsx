import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";

const About = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Números de Ponto Flutuante
      </LineTitle>
      <Line />
      <p className="text-neutral-500">
        Números Float ocupam 32 bits de memória e são representados por 3 partes: sinal, expoente e mantissa.

        O sinal é representado por 1 bit, o expoente por 8 bits e a mantissa por 23 bits.
      </p>
      <Line />
      <h3>
        Float na Memória
      </h3>
      <img 
        src="/assets/images/float-example.png"
        alt="Float na memória"
        className="w-full my-2 rounded"
      />
      <h3>
        Double Float na Memória
      </h3>
      <img 
        src="/assets/images/long-float.png"
        alt="Float na memória"
        className="w-full my-2 rounded"
      />
      <Line />
    </main>
  );
};

export default About;