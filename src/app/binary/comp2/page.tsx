import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";

const About = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Complemento de 2
      </LineTitle>
      <Line />
      <p className="text-neutral-500">
        Sistema de representação de números inteiros que utiliza o bit mais significativo para representar o sinal do número.
        
        São 4 etapas para converter um número para sua forma de complemento de 2:
      </p>
      <ol className="text-neutral-500 list-decimal pl-8">
        <li>
          Inverter todos os bits do número
        </li>
        <li>
          Somar 1 ao número invertido
        </li>
        <li>
          Adicionar o sinal ao número
        </li>
        <li>
          Se o número for positivo, o bit mais significativo será 0. Se for negativo, será 1.
        </li>
      </ol>
      <Line />
      <h3>
        
      </h3>
      <img 
        src="/assets/images/comp2.png"
        alt="Float na memória"
        className="w-full my-2 rounded"
      />
      <Line />
    </main>
  );
};

export default About;