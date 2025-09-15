import Link from "next/link";
import { Button } from "../../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../ui/input-otp";

const text = {
  title: "تایید شماره موبایل",
  buttonTitle: "تایید",
  sendAgain: "ارسال مجدد کد",
  changePhoneNumber: "تغییر شماره موبایل",
};
interface PropsType {
  phoneNumber: string;
}
const Otp: React.FC<PropsType> = ({ phoneNumber }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 bg-gray-50">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        {text.title}
      </h1>
      <p className="text-muted-foreground text-sm mt-2">{`کد ارسال شده به شماره ${phoneNumber} را وارد کنید`}</p>
      <div className="grid w-full max-w-sm items-center gap-3 mt-4">
        <div className="justify-center flex">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} className="rounded-sm mr-1" />
              <InputOTPSlot index={1} className="rounded-sm mx-1" />
              <InputOTPSlot index={2} className="rounded-sm mx-1" />
              <InputOTPSlot index={3} className="rounded-sm mx-1" />
              <InputOTPSlot index={4} className="rounded-sm mx-1" />
              <InputOTPSlot index={5} className="rounded-sm ml-1" />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button size={"lg"} className="cursor-pointer">
          {text.buttonTitle}
        </Button>
        <small className="text-sm font-extrabold  cursor-pointer hover:opacity-80 text-center">
          {text.sendAgain}
        </small>
        <small className="text-sm font-extrabold text-center cursor-pointer hover:opacity-80 ">
          {text.changePhoneNumber}
        </small>
      </div>
    </div>
  );
};

export default Otp;
