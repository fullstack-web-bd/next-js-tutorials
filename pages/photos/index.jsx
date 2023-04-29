import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PostAllPage({ photos }) {
    return (
        <>
            <Head>
                <title>DevsEnv | photos</title>
                <meta name="description" content="DevsEnv tutorials Post all" />
                <meta name="keyword" content="DevsEnv, tutorials, devsenv Post all" />
            </Head>

            <h2>photos</h2>
            {
                photos.map(photo => (
                    <div key={photo.id}>
                        <h3>{photo.title}</h3>
                        <p>
                            <Image src={photo.thumbnailUrl} height={50} width={50} alt="" />
                        </p>
                        <p>
                            <Link href={`/photos/${photo.id}`}>View photo</Link>
                        </p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export async function getServerSideProps({ query, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=59'
    );

    const startIndex = query.start ?? 0;
    const limit = query.limit ?? 10;

    const listResponse = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=${startIndex}&_limit=${limit}`
    )

    const photos = await listResponse.json();

    return {
        props: {
            photos,
        },
    }
}