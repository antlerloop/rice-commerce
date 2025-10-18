import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh flex flex-col relative w-full">
      <Header />
      <div className="flex-1 pt-16">{children}</div>
      <Footer />
    </div>
  );
}
