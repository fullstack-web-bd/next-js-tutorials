import Head from "next/head";
import Image from "next/image";

export default function PostDetailPage({ photo }) {
    return (
        <>
            <Head>
                <title>DevsEnv | photos</title>
                <meta name="description" content="DevsEnv tutorials photo all" />
                <meta name="keyword" content="DevsEnv, tutorials, devsenv photo all" />
            </Head>

            <h3>{photo.title}</h3>
            <p>
                <Image src={photo.url} height={500} width={500} alt="" />
            </p>
        </>
    )
}

export async function getServerSideProps({ params, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=59'
    );

    const { id } = params;
    const detailResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await detailResponse.json();

    if (!photo.title) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            photo,
        },
    }
}
