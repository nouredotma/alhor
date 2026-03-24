import type React from "react";

export const metadata = {
  title: "Admin | Alhor Parfum",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
