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
      <h3>
        Converter parte fracionária para binário
      </h3>
      <ol className="text-neutral-500 list-decimal pl-8">
        <li>
          Multiplicar a parte fracionária por 2
        </li>
        <li>
          Separar a parte inteira e a parte fracionária
        </li>
        <li>
          Repetir o processo até a parte fracionária ser 0
        </li>
      </ol>
      <p>
        Exemplo: 0,6
      </p>
      <ol className="text-neutral-500 list-decimal pl-8">
        <li>
          0,6 x 2 = 1,2
        </li>


        
      </ol>

      <Line />
      <p>
        Procedimento de conversão 7,6
      </p>
      <ol className="text-neutral-500 list-decimal pl-8">
        <li>
          Converter 7 para binário: 111
        </li>
        <li>
          Converter 0,6 para binário: 0,1001
        </li>
        <li>
          Juntar os dois: 111,1001
        </li>
        <li>
          Normalizar: 1,111001 x 2^2
        </li>
        <li>
          Excesso de 127: 129
        </li>
        <li>
          129 em binário: 10000001
        </li>
        <li>
          Juntar tudo: 0 10000001 11100100000000000000000
        </li>
      </ol>
    </main>
  );
};

export default About;