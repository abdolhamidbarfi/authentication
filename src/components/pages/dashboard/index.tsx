"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserInfo {
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export default function UserProfileView() {
  const router = useRouter();
  function get
  const [user, setUser] = useState<UserInfo | null>(() =>  localStorage.getItem("user-info"));

  useEffect(() => {
    const storedUser = localStorage.getItem("user-info");
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  console.log(user);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-[350px] shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarImage src={user?.picture.large} alt={user?.name.first} />
            <AvatarFallback>
              {user?.name.first.charAt(0)}
              {user?.name.last.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl font-semibold">
            Welcome {user?.name.title} {user?.name.first} {user?.name.last}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
            Email: {user?.email}
          </h4>
        </CardContent>
        <CardFooter>
          <Button variant={"destructive"} className="w-full cursor-pointer">
            خروج
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
