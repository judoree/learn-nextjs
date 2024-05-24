export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
// server component fetch 할 함수
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}
// async 쓰는 이유 : await 쓰기 위함 기본적임 부모 함수에 async 써줘야함
export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
