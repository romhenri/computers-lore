import ComputerCard from "@/components/comp/ComputerCard";
import LineTitle from "@/components/base/line-title";

const Timeline = () => {
  return (
    <main>
      <LineTitle>
        Linha do Tempo
      </LineTitle>

      <ComputerCard 
        machine="Apple I"
        creator="Steve Wozniak"
        year={1976}
      />
    </main>
  )
};

export default Timeline;