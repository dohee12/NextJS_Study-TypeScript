"use client"; // js를 사용한 클라이언트를 하기 위해서는 사용
import { useState, useRef } from "react";
import MyInput from "../../components/MyInput";

export default function Home() {
  const myInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Dom을 컨트롤

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const focusInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="p-4">
      <div className="py-8">
        <div className="py-4">
          <MyInput ref={myInputRef} />
          <button
            className="ml-2 px-2 py-1 bg-white shadow-2xl"
            onClick={() => {
              myInputRef.current?.focus();
            }}
          >
            포커스
          </button>
        </div>
        <div className="py-4">
          <input
            placeholder="검색"
            className="bg-white px-2 shadow-2xl"
            ref={inputRef}
          ></input>
          <button
            className="ml-2 px-2 py-1 bg-white shadow-2xl"
            onClick={focusInput}
          >
            포커스
          </button>
        </div>
      </div>
      <div> state count : {count} </div>
      <div> ref count : {countRef.current}</div>
      <div>
        <button
          className="bg-red-50 px-4 py-2 shadow-2xs cursor-pointer"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          state +1
        </button>
        <button
          className="bg-red-50 px-4 py-2 shadow-2xs cursor-pointer"
          onClick={() => {
            countRef.current = countRef.current + 1;
          }}
        >
          ref + 1
        </button>
      </div>
    </div>
  );
}
