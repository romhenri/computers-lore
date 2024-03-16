import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Line } from "@/components/base/line";

const AncestorsPage = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        1º Ancestrais
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline1"
        height="2205px"
      >
        O abaco surgiu com a ideia de facilitar as contas pra muita gente e fazer calculos das mais diversas formas, introduzinho a ideia de automatizaçõa de tarefas simples e sendo considera o primeiro computador
      </Timeline>
    </main>
  )
};

export default AncestorsPage;