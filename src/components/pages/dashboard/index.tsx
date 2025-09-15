"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ConfirmationModal from "@/components/modals/confirmationModal";

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

export default function WelcomeToUser() {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user-info");
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-[350px] shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarImage src={user.picture.large} alt={user.name.first} />
            <AvatarFallback>
              {user.name.first.charAt(0)}
              {user.name.last.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl font-semibold text-center">
            👋 خوش اومدی {user.name.title} {user.name.first} {user.name.last}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
          <p className="text-gray-600">{user.email}</p>
          <ConfirmationModal
            onConfirm={handleLogout}
            closeTitle="بستن"
            confirmTitle="خروج"
            title="آیا برای خروج از پنل مطمعا هستید؟"
          >
            خروج
          </ConfirmationModal>
        </CardContent>
      </Card>
    </div>
  );
}
