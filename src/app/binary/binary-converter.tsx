"use client";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
 
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
import { Input } from "@/components/base/input";
import { Card } from "@/components/base/card";
import { Line } from "@/components/base/line";
 
const FormSchema = z.object({
  number: z.string().min(1, {
    message: "Insira um número!",
  }),
});
 
function convertToBinary(number: number) {
  return number.toString(2); 
}

const NumberToBinary = () => {
  const [binary, setBinary] = useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setBinary(
      convertToBinary(
        parseInt(data.number)
      )
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pt-4">
                Número Decimal:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: 0-999..." 
                  {...field} 
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (e.target.value === '' || re.test(e.target.value)) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Números inteiros positivos.
              </FormDescription>

              <p
                className="text-sm pt-4"
              >
                Número Binário:
              </p>
              <Card>
                <div 
                className="bg-neutral-900">
                  <p 
                    className="text-sm p-2 ">
                    {
                      binary 
                      
                      ? `${binary}`
                      : `[Resultado]`
                    }
                  </p>
                </div>
              </Card>
            </FormItem>
          )}
        />
        <Line />
        <Button type="submit">
          Converter
        </Button>
      </form>
    </Form>
  );
};

const BinaryToNumber = () => {
  const [number, setNumber] = useState<number>(0);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setNumber(
      parseInt(data.number, 2)
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pt-4">
                Número Binário:
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: 0-1111..." 
                  {...field} 
                  onChange={(e) => {
                    const re = /^[0-1\b]+$/;
                    if (e.target.value === '' || re.test(e.target.value)) {
                      field.onChange(e);
                    }
                  }}
                />
                <FormMessage />
              </FormControl>
              <FormDescription>
                Números binários.
              </FormDescription>

              <p
                className="text-sm pt-4"
              >
                Número Decimal:
              </p>
              <Card>
                <div 
                className="bg-neutral-900">
                  <p 
                    className="text-sm p-2 ">
                    {
                      number 
                      
                      ? `${number}`
                      : `[Resultado]`
                    }
                  </p>
                </div>
              </Card>
            </FormItem>
          )}
        />
        <Line />
        <Button type="submit">
          Converter
        </Button>
      </form>
    </Form>
  );
};

export { NumberToBinary, BinaryToNumber };