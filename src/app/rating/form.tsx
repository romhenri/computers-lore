"use client";

import emailjs from 'emailjs-com';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";

import { LineSpacer, Spacer } from "@/components/base/line";
import { Button } from "@/components/base/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/base/form";
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
import { Textarea } from "@/components/base/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/base/dialog";

type IRating = {
  opinion: string;
  opinion2: string;
  opinion3: string;
  liked?: string;
  disliked?: string;
  idea?: string;
};

const DialogSucess = (
  {
    open,
    onOpenChange,
  }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Avaliação Cadastrada!</DialogTitle>
          <DialogDescription>
            A sua avaliação foi realizada com sucesso. Obrigado por contribuir com a melhoria da plataforma.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button 
            type="submit"
            onClick={() => {
              onOpenChange(false);
              window.location.reload();
            }} 
          >
            Ok, obrigado!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

function sendEmail(data: IRating) {
  const  {
    opinion,
    opinion2,
    opinion3,
    liked,
    disliked,
    idea,
  } = data;

  let header = ``;

  const name = document.getElementById("name") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;

  if (name.value && email.value) {
    header += `de ${name.value} (${email.value})`;
  } else {
    header += "Anônima";
  }

  const meta = {
    time: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    platform: navigator.platform,
    browser: navigator.userAgent,
  }

  const message = `Design: ${opinion}/5
  Conteúdo: ${opinion2}/5
  Utilidade: ${opinion3}/5
  Gostou: ${liked || "-"}
  Não gostou: ${disliked || "-"}
  Sugestão: ${idea || "-"}

  Enviado em: ${meta.time}
  Plataforma: ${meta.platform}
  Navegador: ${meta.browser}
  `

  const serviceID = "service_ne0oufn";
  const templateID = "template_vjo82vy";
  const templateParams = {
    from_name: header,
    message: message,
  }
  const publicKey = "xFBAbGm4Q9scA5Rzl";
  // eslint-disable-next-line
  emailjs.send(serviceID, templateID, templateParams, publicKey)
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
    console.log(err);
  });
};

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
  liked: z
    .string({
      required_error: "Selecione uma opção.",
    }).optional(),
  disliked: z
    .string({
      required_error: "Selecione uma opção.",
    }).optional(),
  idea: z
    .string({
      required_error: "Selecione uma opção.",
    }).optional(),
});
  
const TheForm = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    sendEmail(data);

    form.reset(); // Do not worked
    form.setValue('opinion', '');
    form.setValue('opinion2', '');
    form.setValue('opinion3', '');
    form.setValue('liked', '');
    form.setValue('disliked', '');
    form.setValue('idea', '');

    setOpen(true);
  };

  return(
    <Form {...form}>
      <DialogSucess open={open} onOpenChange={setOpen} />
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <CardContent className="space-y-2">
        <FormField 
          control={form.control}
          name="opinion"
          render={({field}) => (
            <FormItem>
              <InputOpinion 
                  mainText="Design"
                  desc="Estética e organização visual."
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
                mainText="Conteúdo"
                desc="Qualidade e relevância do conteúdo."
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
                mainText="Utilidade"
                desc="Utilidade das ferrramentas"
                onValueChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <LineSpacer />

        <FormField
          control={form.control}
          name="liked"
          render={({ field }) => (
            <FormItem>
              <FormLabel>O que você gostou?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="(Opcional)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Spacer />

        <FormField
          control={form.control}
          name="disliked"
          render={({ field }) => (
            <FormItem>
              <FormLabel>O que você NÃO gostou?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="(Opcional)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Spacer />

        <FormField
          control={form.control}
          name="idea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tem alguma sugestão ou ideia?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="(Opcional)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Spacer />

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
                <Label htmlFor="name">Nome e Sobrenome:</Label>
                <Input
                  id="name" 
                  defaultValue="" 
                  placeholder="Alan Turing"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email:</Label>
                <Input
                  id="email" 
                  defaultValue=""
                  placeholder="exemplo@gmail.com"
                />
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
            <LineSpacer />

            <TheForm />
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FormSection;