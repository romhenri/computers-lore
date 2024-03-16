import LineTitle from "@/components/base/line-title";
import Timeline from "@/components/struct/Timeline";
import { Button } from "@/components/base/button";
import { Line } from "@/components/base/line";
// Link Next
import Link from 'next/link';

const AncestorsPage = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        1º Ancestrais
      </LineTitle>
      <Line />

      <Timeline
        bg="bg-timeline1"
        tokens="h-[2205px] text-black text-2xl leading-10"
      >
        <div className="pt-[50px]">
          O abaco surgiu com a ideia de facilitar as contas pra muita gente e fazer calculos das mais diversas formas, introduzinho a ideia de automatizaçõa de tarefas simples e sendo considera o primeiro computador
        </div>

        <div className="pt-[370px]">
          O abaco surgiu com a ideia de facilitar as contas pra muita gente e fazer calculos das mais diversas formas, introduzinho a ideia de automatizaçõa de tarefas simples e sendo considera o primeiro computador
        </div>

        <div className="pt-[610px] text-right">
        O abaco surgiu com a ideia de facilitar as contas pra muita gente e fazer calculos das mais diversas formas, introduzinho a ideia de automatizaçõa de tarefas simples e sendo considera o primeiro computador.
        </div>

        <div className="pt-[374px]">
          <Link href="/timeline">
            <Button 
              className="w-full" 
              variant="secondary" 
            >
              Concluir Capítulo
            </Button>
          </Link>
        </div>
      </Timeline>
    </main>
  )
};

export default AncestorsPage;