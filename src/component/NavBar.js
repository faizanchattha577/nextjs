import Link from 'next/link'

export default function NavBar() {
  return (
    <>
        <nav className="  flex w-[50%]  ml-[20rem] justify-center rounded-[10rem] bg-blue-700 py-3 text-white">
        <ul className="flex space-x-3 mr-5">
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>

          <Link legacyBehavior href="/blog">
            <a>Blog</a>
          </Link>

          <Link legacyBehavior href="/about">
            <a>About</a>
          </Link>
        </ul>
      </nav>
    </>
  )
}
