import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        The page you are looking for could not be found.
      </p>
      <Link legacyBehavior href="/">
        <a className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
          Go back to home
        </a>
      </Link>
    </div>
  );
}
