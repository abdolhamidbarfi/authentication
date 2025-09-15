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
import { Spinner } from "@/components/ui/spiner";

interface PropsType {
  onSubmit: any;
  isLoading: boolean;
}

const text = {
  title: "ورود به کالری ای‌آی",
  desciption: "برای ورود شماره موبایل یا ایمیل خود را وارد کنید",
  phoneLabel: "شماره موبایل",
  buttonTitle: "ورود",
  validation: {
    incorrect: "لطفا یک شماره همراه صحیح وارد کنید",
  },
};

const phoneRegex = /^(09\d{9}|\+989\d{9}|00989\d{9})$/;

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(11, { message: text.validation.incorrect })
    .max(14, { message: text.validation.incorrect })
    .refine((val) => phoneRegex.test(val), {
      message: text.validation.incorrect,
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
                    autoFocus
                    required
                    type="text"
                    dir="ltr"
                    id="phoneNumber"
                    placeholder="09120001234"
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
            {isLoading && (
              <Spinner className="w-8 h-8 text-white" variant="circle" />
            )}

            {text.buttonTitle}
            <div className="flex justify-center items-center"></div>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Auth;
