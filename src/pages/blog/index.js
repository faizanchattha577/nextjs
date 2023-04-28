import NavBar from "@/component/NavBar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div className="flex flex-wrap justify-center">
          {data.slice(0, 6).map((data) => (
            <div
              key={data.id}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <div className="px-4 ">
                <Link legacyBehavior href={`/blog/${data.id}`}>
                  <h1 className="cursor-pointer mb-2">{data.title}</h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
