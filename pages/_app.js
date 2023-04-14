import Layout from "@/components/layouts/Layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  if (getLayout) {
    return getLayout(<Component {...pageProps} />)
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
