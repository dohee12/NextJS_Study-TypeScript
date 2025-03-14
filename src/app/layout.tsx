import type { Metadata } from "next";
import { Geist, Geist_Mono, Hahmlet } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hahmlet = Hahmlet({
  variable: "--font-hahmlet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "타이틀 입니다",
  description: "설명",
  openGraph: {
    //OG
    images: [{ url: "https://naver.com/naver.png" }], //메타 데이터
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`bg-blue-400 ${geistSans.variable} ${geistMono.variable} ${hahmlet.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// const number: number = 10;
// const text: string = "hello";
// // type script : 상태 타입을 정리하는 것
// const isGood: boolean = false;
// const cards: string[] = ["hello", "world"];
// const numbers: number[] = [1, 2, 3, 4, 5];
// let test: number | string = ''
// test  = 0

// let abc: string = ''
// abc = ''

// console.log(abc)
// const test: unknown  //쓰지 않음

// let test: number | string = ''; //number or string
// test = 0;
// const keys: 'happy' | 'sad' = 'sad'; //happy or sad
// //error) const keys: 'happy' | 'sad' = 'anger'; //error

// interface MyOpenGraph {
//   images: string;
//   title: string;
//   description: string;
// }

// interface MyMetatag {
//   title: string;
//   description: string | undefined
//   openGraph: MyOpenGraph;
// }
// //array 는 이런식으로 사용

// const myMetatag: MyMetatag = {
//   title: '타이틀',
//   description: undefined,
//   openGraph: {
//     title: '타이틀',
//     description: '설명',
//     images: '이미지'
//   }
// }

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(number);
// console.log(text);
// console.log(isGood);
// console.log(cards);
// console.log(numbers);
// console.log(test);
// console.log(keys);