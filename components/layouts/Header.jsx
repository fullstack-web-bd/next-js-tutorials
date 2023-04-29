import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/profile/me">My Profile</Link>
            <Link href="/posts/csr">CSR Posts</Link>
            <Link href="/posts">SSR Posts</Link>
            <Link href="/photos">Photos</Link>
        </nav>
    )
}