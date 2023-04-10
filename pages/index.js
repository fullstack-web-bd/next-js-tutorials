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
