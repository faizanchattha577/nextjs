import NavBar from "@/component/NavBar"


export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    const paths = data.map((data) => {
        return {
          params: { pageNo: data.id.toString() },
        }
    })

   
        return {
          paths,
          fallback: false,

        }
      }

export const getStaticProps = async (context) => {
    const id = context.params.pageNo
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const data = await res.json()

    return {
        props: { data },
    }
}





const pageNo = ({data}) => {

  return (
    <>
       <NavBar/>
       
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold ">Blog</h1>
         <h3>{data.id}</h3>
          <h3>{data.title}</h3>
          <p>{data.body}</p>

        </div>



    </>
  )
}

export default pageNo