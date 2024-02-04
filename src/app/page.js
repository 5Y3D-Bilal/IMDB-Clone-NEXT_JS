import MovieResults_Fetched_DATA from "@/components/MovieResults_Fetched_DATA"

const API_Key = process.env.API_KEY

export default async function page({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_Key}&language=en-US&page=1`)
  const data = await res.json()
  if (!res.ok) {
    throw new Error('Something went worng')
  }
  const results = data.results
  return (
    <div>
      <MovieResults_Fetched_DATA results={results} />
    </div>
  )
}
