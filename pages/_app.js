import Layout from "@/components/layouts/Layout";

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css';

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
