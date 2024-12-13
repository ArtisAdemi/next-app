"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/globals/LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <main className="">{children}</main>;
}
