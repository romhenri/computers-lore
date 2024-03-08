import ProfileCard from "@/components/comp/ProfileCard";
import LineTitle from "@/components/ui/line-title";
import Line from "@/components/ui/line";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const RatingPage = () => {
  return (
    <main>
      <LineTitle>
        Avalie a Plataforma:
      </LineTitle>

      <section className="mb-4">
        <Tabs defaultValue="account" className="w-[400px] mx-auto">
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