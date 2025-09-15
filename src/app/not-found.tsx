"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6 text-gray-600">صفحه مورد نظر پیدا نشد.</p>
      <Link href="/">
        <Button variant={"default"} className="cursor-pointer">
          بازگشت به خانه
        </Button>{" "}
      </Link>
    </div>
  );
}
