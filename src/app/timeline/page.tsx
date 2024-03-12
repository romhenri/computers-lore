import ComputerCard from "@/components/struct/ComputerCard";
import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";

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

const MachineList = () => {
  return (
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
  );
};

const Timeline = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Linha do Tempo
      </LineTitle>

      <MachineList />
      <Line />
    </main>
  )
};

export default Timeline;