import Head from 'next/head'
import Layout from '../src/components/layout';
import Posts from '../src/components/home/posts';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts/>
    </Layout>
  )
}
