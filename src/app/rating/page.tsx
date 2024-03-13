import LineTitle from "@/components/base/line-title";
import { Line, LineSpacer } from "@/components/base/line";
import InputOpinion from "@/components/comp/InputOpinion";
import { Button } from "@/components/base/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/card"
import { Input } from "@/components/base/input";
import { Label } from "@/components/base/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/base/tabs";

const Form = () => {
  return(
    <div>
      <InputOpinion 
        mainText="Design"
        desc="Estética, cores e organização visual."
      />
      <InputOpinion 
        mainText="Didática"
        desc="Clareza e objetividade na transmissão do conteúdo."
      />
      <InputOpinion 
        mainText="Conteúdo"
        desc="Qualidade e relevância do material."
      />
    </div>
  );
};

const RatingPage = () => {
  return (
    <main>
      <LineTitle>
        Avalie a Plataforma:
      </LineTitle>

      <section className="mb-12">
        <Tabs defaultValue="account" className="w-[100%] max-w-[500px] mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Inscrita</TabsTrigger>
            <TabsTrigger value="password">Anônima</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Avaliação</CardTitle>
                <CardDescription>
                  Ajude-nos a melhorar continuamnete a plataforma. Com sua opinião podemos melhorar a experiência de todos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Nome:</Label>
                  <Input id="name" defaultValue="" 
                  placeholder="João Fulano"/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Email:</Label>
                  <Input id="username" defaultValue="" placeholder="exemplo@gmail.com"/>
                </div>

                <LineSpacer />

                <Form />

              </CardContent>
              <CardFooter>
                <Button>Confirmar</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Avaliação Anônima</CardTitle>
                <CardDescription>
                  Ajude-nos a melhorar continuamnete a plataforma com sua opinião sincera, sem se identificar.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">

              <LineSpacer />

              <Form />

              </CardContent>
              <CardFooter>
                <Button>Confirmar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Line />
    </main>
  )
};

export default RatingPage;