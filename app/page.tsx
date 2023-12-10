import Head from "next/head"
import MovieSearch from "./components/MovieSearch"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Movie Database</title>
        <meta name="description"/>
      </Head>
      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4x1 font-bold mb-8 tex-white">Movie Database</h1>
        <MovieSearch/>
      </main>
    </div>
  )
}