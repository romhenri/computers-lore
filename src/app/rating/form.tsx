"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { LineSpacer } from "@/components/base/line";
import { Button } from "@/components/base/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/base/form"
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
import InputOpinion from "@/components/comp/InputOpinion";
import { toast } from "@/components/base/use-toast"

const FormSchema = z.object({
  opinion: z
    .string({
      required_error: "Selecione uma opção.",
    }),
  opinion2: z
    .string({
      required_error: "Selecione uma opção.",
    }),
  opinion3: z
    .string({
      required_error: "Selecione uma opção.",
    }),
})
  
const TheForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <CardContent className="space-y-2">
        <FormField 
          control={form.control}
          name="opinion"
          render={({field}) => (
            <FormItem>
              <InputOpinion 
                  mainText="Design"
                  desc="Estética, cores e organização visual."
                  onValueChange={field.onChange}
                />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="opinion2"
          render={({field}) => (
            <FormItem>
              <InputOpinion 
                mainText="Didática"
                desc="Clareza e objetividade na transmissão do conteúdo."
                onValueChange={field.onChange}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="opinion3"
          render={({field}) => (
            <FormItem>
              <InputOpinion 
                mainText="Funcionalidade"
                desc="Facilidade de uso e navegação."
                onValueChange={field.onChange}
              />
            </FormItem>
          )}
        />

        <FormMessage>
          {form.formState.errors.opinion?.message}
        </FormMessage>
        </CardContent>
              
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
          >
            Confirmar
          </Button>
        </CardFooter>
      </form>
      
    </Form>
  );
};

const FormSection = () => {
  return (
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
                </CardContent>

                <TheForm />
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

              <TheForm />

              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
  )
};

export default FormSection;