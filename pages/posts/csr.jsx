import Head from "next/head";
import { useEffect, useState } from "react";

export default function PostAllPage() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, []);

    return (
        <>
            <Head>
                <title>DevsEnv | Post all</title>
                <meta name="description" content="DevsEnv tutorials Post all" />
                <meta name="keyword" content="DevsEnv, tutorials, devsenv Post all" />
            </Head>

            <h2>Post all</h2>
            {
                isLoading && <h4>Loading posts...</h4>
            }
            {
                !isLoading &&
                data.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>
                            {post.body}
                        </p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}
