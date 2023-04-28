import Head from "next/head";
import Link from "next/link";

export default function PostAllPage({ posts }) {
    return (
        <>
            <Head>
                <title>DevsEnv | Posts</title>
                <meta name="description" content="DevsEnv tutorials Post all" />
                <meta name="keyword" content="DevsEnv, tutorials, devsenv Post all" />
            </Head>

            <h2>Posts</h2>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>
                            {post.body}
                        </p>
                        <p>
                            <Link href={`/posts/${post.id}`}>View post</Link>
                        </p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}