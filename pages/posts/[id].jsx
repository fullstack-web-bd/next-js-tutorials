import Head from "next/head";

export default function PostDetailPage({ post }) {
    return (
        <>
            <Head>
                <title>DevsEnv | Posts</title>
                <meta name="description" content="DevsEnv tutorials Post all" />
                <meta name="keyword" content="DevsEnv, tutorials, devsenv Post all" />
            </Head>

            <h3>{post.title}</h3>
            <p>
                {post.body}
            </p>
        </>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map(post => ({
        params: { id: post.id + '' }
    }));

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}