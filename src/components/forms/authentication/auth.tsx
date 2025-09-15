import { Label } from "@radix-ui/react-label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const text = {
  title: "ورود به کالری ای‌آی",
  desciption: "برای ورود شماره موبایل یا ایمیل خود را وارد کنید",
  phoneLabel: "شماره موبایل",
  buttonTitle: "دریافت کد تایید",
};

interface PropsType {
  phoneNumber?: string;
}

const Auth: React.FC<PropsType> = ({ phoneNumber }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 bg-gray-50">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        {text.title}
      </h1>
      <p className="text-muted-foreground text-sm mt-2">{text.desciption}</p>
      <div className="grid w-full max-w-sm items-center gap-3 mt-4">
        <Label className="justify-end" htmlFor="phoneNumber">
          {text.phoneLabel}
        </Label>
        <Input type="text" id="phoneNumber" placeholder="+989121234567" />
        <Button size={"lg"} className="cursor-pointer">
          {text.buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default Auth;
