import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h2>Movie Detail</h2>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2>Videos</h2>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
