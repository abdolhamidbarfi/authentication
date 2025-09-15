"use client";
//import hooks
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
//import components
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dispatch } from "react";

const text = {
  title: "ورود به کالری ای‌آی",
  desciption: "برای ورود شماره موبایل یا ایمیل خود را وارد کنید",
  phoneLabel: "شماره موبایل",
  buttonTitle: "دریافت کد تایید",
};

interface PropsType {
  onSubmit: any;
  isLoading: boolean;
}

const formSchema = z.object({
  phoneNumber: z.string().min(2, {
    message: "لطفا یک شماره همراه صحیح وارد کنید",
  }),
});

const Auth: React.FC<PropsType> = ({ onSubmit, isLoading }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 bg-gray-50">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        {text.title}
      </h1>
      <p className="text-muted-foreground text-sm mt-2">{text.desciption}</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full max-w-sm items-center gap-3 mt-6"
        >
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phoneNumber">{text.phoneLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    dir="ltr"
                    id="phoneNumber"
                    placeholder="+989121234567"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size={"lg"}
            className="cursor-pointer"
            disabled={isLoading}
          >
            {text.buttonTitle}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Auth;
