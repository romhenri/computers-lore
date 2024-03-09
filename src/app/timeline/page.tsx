import ComputerCard from "@/components/struct/ComputerCard";
import LineTitle from "@/components/base/line-title";

import data from "../../data/machines.json";

interface IMachine {
  machine: string | null;
  creator: string | null;
  year: number | null;
  images: IImage[] | null;
}

interface IImage {
  uri: string | null;
  label: string | null;
}

const machines : IMachine[] = data;

const Timeline = () => {
  return (
    <main>
      <LineTitle>
        Linha do Tempo
      </LineTitle>

      <section className="flex flex-col gap-2">
        {machines && machines.map((machine, index) => (
          <ComputerCard 
            key={index}
            machine={machine.machine || ''}
            creator={machine.creator || ''}
            year={machine.year || 0}
            img={machine.images &&
               machine.images[0] ? machine.images[0].uri : ''}
          />
        ))}
      </section>
    </main>
  )
};

export default Timeline;