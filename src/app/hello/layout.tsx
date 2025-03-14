import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hello 입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-blue-500">
      {children}
    </div>
  );
}
