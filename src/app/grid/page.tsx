import { Bell, Heart, Search, ShoppingCart } from "lucide-react";

export default function Home() {
  const btns: string[] = ["Systems", "Illustrations", "Templates", "Mockups"];

  return (
    <div className="bg-blue-100">
      {/* <div className="w-screen h-[60px] bg-white shadow-lg rounded-2xl">
      </div> */}

      <div>
        <div className="flex bg-white px-4 py-2 items-center w-screen shadow-lg rounded-2xl">
          {/* 왼쪽 */}
          <div className="flex basis-1/3 items-center">
            <div className="w-[32px] h-[32px] bg-purple-400 rounded-full"></div>
            <div className="pl-4 font-extrabold">Symbol</div>
          </div>
          {/* 중간 */}
          <div className="flex justify-center basis-1/3 font-bold">
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Systems
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Illustrations
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Templates
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Mockups
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="flex basis-1/3 justify-end">
            <div
              className="px-4 py-2 bg-white border-2 border-blue-500 
            rounded-lg text-blue-500 font-bold cursor-pointer hover:bg-blue-600 hover:text-white active:text-white"
            >
              Hire Us
            </div>
          </div>
        </div>

        {/* 변형 */}
        <div className="flex bg-white px-4 py-2 items-center w-screen shadow-lg rounded-2xl mt-8 justify-between">
          {/* 왼쪽 */}
          <div className="flex items-center">
            <div className="w-[32px] h-[32px] bg-purple-400 rounded-full"></div>
            <div className="pl-4 font-extrabold">Symbol</div>
          </div>
          {/* 중간 */}
          <div className="flex justify-center font-bold">
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Systems
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Illustrations
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Templates
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Mockups
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="flex justify-end">
            <div
              className="px-4 py-2 bg-white border-2 border-blue-500 
            rounded-lg text-blue-500 font-bold cursor-pointer hover:bg-blue-600 hover:text-white active:text-white transform duration-700 ease-in-out"
            >
              Hire Us
            </div>
          </div>
        </div>

        {/* 변형 */}
        <div className="flex bg-white px-4 py-2 items-center w-screen shadow-lg rounded-2xl mt-8 justify-between">
          {/* 왼쪽 */}
          <div className="flex justify-center">
            <div className="w-[32px] h-[32px] bg-purple-400 rounded-full"></div>
            <div className="flex items-center px-4">
              <Search />
              <input
                type="text"
                placeholder="search"
                className="outline-none p-1 hover:bg-amber-50"
              />
            </div>
          </div>
          {/* 중간 */}
          <div className="flex justify-center font-bold">
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Systems
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Illustrations
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Templates
            </div>
            <div className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700">
              Mockups
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="flex justify-end items-center">
            <div className="grid grid-cols-3 gap-5">
              <Heart size={25} />
              <ShoppingCart size={25} />
              <Bell size={25} />
            </div>
            <div className="w-[0.2px] h-[20px] mx-2 border-1 border-neutral-200 shadow-2xl"></div>
            <div className="w-[45px] h-[45px] bg-red-400 rounded-full"></div>
          </div>
        </div>

        {/* 변형 */}
        <div className="flex bg-white px-4 py-2 items-center w-screen shadow-lg rounded-2xl mt-8">
          <div className="flex basis-1/3 items-center">
            <div className="w-[32px] h-[32px] bg-purple-300 rounded-full"></div>
            <div className="pl-4 font-extrabold">Symbol</div>
            <div className="w-[0.1px] h-[20px] mx-3 border-1 border-neutral-200" />
            <div className="flex items-center">
              <Search />
              <input
                type="text"
                placeholder="search"
                className="outline-none p-1 hover:bg-amber-50"
              ></input>
            </div>
          </div>
          <div className="flex justify-center basis-1/3 font-semibold space-x-4">
            <div className="cursor-pointer hover:text-blue-500 active:text-blue-700">
              Systems
            </div>
            <div className="cursor-pointer hover:text-blue-500 active:text-blue-700">
              Illustrations
            </div>
            <div className="cursor-pointer hover:text-blue-500 active:text-blue-700">
              Templates
            </div>
            <div className="cursor-pointer hover:text-blue-500 active:text-blue-700">
              Mockups
            </div>
          </div>
          <div className="flex justify-end basis-1/3 items-center">
            <div className="grid grid-cols-3 gap-3">
              <Heart size={20} />
              <ShoppingCart size={20} />
              <Bell size={20} />
            </div>
            <div className="w-[0.1px] h-[20px] mx-2 border-1 border-neutral-200"></div>
            <div className="bg-purple-300 w-[32px] h-[32px] rounded-full"></div>
          </div>
        </div>

        <div className="flex bg-white px-4 py-2 items-center w-screen shadow-lg rounded-2xl justify-between mt-8">
          <div className="flex items-center">
            <div className="w-[32px] h-[32px] bg-purple-300 rounded-full"></div>
            <div className="pl-4 font-extrabold">Symbol</div>
          </div>
          <div className="flex justify-center font-semibold">
            {btns.map((ele, i) => (
              <div
                key={i}
                className="px-2 cursor-pointer hover:text-blue-500 active:text-blue-700"
              >
                {ele}
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <div className="px-4 py-2 bg-white border-2 border-blue-500 rounded-lg text-blue-500 font-bold cursor-pointer hover:bg-blue-400 hover:text-white active:bg-blue-600 active:text-white transition duration-700 ease-in-out">
              Hire Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
