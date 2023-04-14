import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/about-us">About us</Link>
      <Link href="/profile/me">My Profile</Link>
      Hello World
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <div style={{  backgroundColor: 'red' }}>{page}</div>
    </>
  )
}
