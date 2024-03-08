// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex justify-center items-center h-full flex-col gap-10">
//       <h1 className="text-6xl">This is the Home Page</h1>
//       <Link
//         href="/shop"
//         className="bg-violet-700 py-2 px-4 text-3xl rounded-lg font-mono font-medium text-white"
//       >
//         Go to Shop
//       </Link>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 bg-gray-100">
      <h1 className="text-6xl text-center">Welcome to our Online Store</h1>
      <Link
        href="/shop"
        className="bg-indigo-600 py-3 px-6 text-2xl rounded-lg text-white hover:bg-indigo-700 transition duration-300 ease-in-out"
      >
        Explore Products
      </Link>
    </div>
  );
}
