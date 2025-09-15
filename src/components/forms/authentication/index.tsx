"use client";
import { useEffect, useState } from "react";
import Auth from "./auth";
import { useFetch } from "@/lib/hooks/useFetch";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spiner";

interface PropsType {}

const Authentication: React.FC<PropsType> = ({}) => {
  const { data, error, fulfilled, pending, runFetch } = useFetch();
  const [isUserLogin] = useState(() => localStorage.getItem("user-info"));
  const router = useRouter();

  if (isUserLogin) {
    router.replace("/dashboard");
    return (
      <div className="flex flex-col min-h-screen justify-center items-center px-4 bg-gray-50">
        <Spinner variant="circle" size={40} />
      </div>
    );
  }

  useEffect(() => {
    if (fulfilled) {
      const { email, name, picture } = data?.results[0];
      localStorage.setItem(
        "user-info",
        JSON.stringify({ email, name, picture })
      );
      router.replace("/dashboard");
    }
  }, [fulfilled]);

  const onSubmit = (e: any) => {
    runFetch("https://randomuser.me/api/?results=1&nat=us");
  };

  return <>{<Auth onSubmit={onSubmit} isLoading={pending} />}</>;
};
export default Authentication;
