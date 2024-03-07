import ComputerCard from "@/components/comp/ComputerCard";
import LineTitle from "@/components/ui/line-title";

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
}

export default Timeline;