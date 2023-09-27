import { ScrollView, Text } from "react-native";
import { Movie } from "./Movie";
import { movies } from "../data/movies";

export function ScrollViewDemo() {
  console.log(movies);
  return (
    <ScrollView>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            image={movie.image}
            tagline={movie.tagline}
          />
        );
      })}
    </ScrollView>
  );
}
