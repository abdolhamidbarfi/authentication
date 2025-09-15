"use client";
import { useEffect, useState } from "react";
import Auth from "./auth";
import { useFetch } from "@/lib/hooks/useFetch";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spiner";

interface PropsType {}

const Authentication: React.FC<PropsType> = ({}) => {
  //handle request to api path
  const { data, error, fulfilled, pending, runFetch } = useFetch<{
    results: { email: string; name: string; picture: object }[];
  }>();

  const router = useRouter();
  const [isUser, setIsUser] = useState<boolean | null>(null);

  useEffect(() => {
    const userInfo = localStorage?.getItem("user-info");
    if (userInfo) {
      router.replace("/dashboard");
    } else {
      setIsUser(false);
    }
  }, []);

  useEffect(() => {
    if (fulfilled && data?.results.length) {
      const { email, name, picture } = data?.results[0];
      localStorage.setItem(
        "user-info",
        JSON.stringify({ email, name, picture })
      );
      router.replace("/dashboard");
    }
  }, [fulfilled]);

  const onSubmit = () => {
    runFetch("https://randomuser.me/api/?results=1&nat=us");
  };

  return (
    <>
      {isUser === null && (
        <div className="flex flex-col min-h-screen justify-center items-center px-4 bg-gray-50">
          <Spinner variant="circle" size={40} />
        </div>
      )}
      {isUser === false && <Auth onSubmit={onSubmit} isLoading={pending} />}
    </>
  );
};
export default Authentication;
