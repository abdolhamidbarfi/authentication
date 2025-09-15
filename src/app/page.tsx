"use client";

import { Spinner } from "@/components/ui/spiner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    route.push("/login");
  });
  return (
    <>
      <Spinner className="w-8 h-8 text-white" variant="circle" />
    </>
  );
}
