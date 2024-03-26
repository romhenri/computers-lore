import ComputerCard from "@/components/struct/ComputerCard";
import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";

import data from "../../data/machines.json";

interface IMachine {
  machine: string | null;
  creator: string | null;
  year: number | string | null;
  yearAC?: number | null;
  images: IImage[] | null;
}

interface IImage {
  uri: string | null;
  label: string | null;
}

const machines : IMachine[] = data;

function getYear(machine: IMachine) {
  if (machine.yearAC) {
    return `~${machine.yearAC} AC`;
  }
  return machine.year;
}

const MachineList = () => {
  return (
    <section className="flex flex-col gap-2">
      {machines && machines.map((machine, index) => (
        <ComputerCard 
          key={index}
          machine={machine.machine || ''}
          creator={machine.creator || ''}
          // @ts-ignore
          year={getYear(machine)}
          img={machine.images &&
              machine.images[0] ? machine.images[0].uri : ''}
        />
      ))}
    </section>
  );
};

const Machines = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Princípais Máquinas
      </LineTitle>

      <MachineList />
      <Line />
    </main>
  )
};

export default Machines;