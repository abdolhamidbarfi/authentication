import { ReactNode } from "react";

export const metadata = {
  title: "Dashboard",
  description:
    "View your account stats, portfolio, and updates in your dashboard.",
};

interface LoginLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LoginLayoutProps) {
  return <>{children}</>;
}
