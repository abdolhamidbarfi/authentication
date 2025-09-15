import { ReactNode } from "react";

export const metadata = {
  title: "Login",
  description: "Access your dashboard by logging in with your account.",
  robots: "noindex, nofollow",
};

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return <>{children}</>;
}
