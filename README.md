ECHO is on.
# alx-project-0x14

## API Overview
The Movie Database (TMDb) API provides rich and detailed information about films, TV shows, actors, images, and more. It’s a comprehensive, community-driven database widely used in movie-related apps.:contentReference[oaicite:0]{index=0}

## Version
This project uses **version 3** of the TMDb API.:contentReference[oaicite:1]{index=1}

## Available Endpoints
TMDb offers over 100 endpoints. Some key ones include:​:contentReference[oaicite:2]{index=2}

- **`GET /search/movie`**: Search for movies by keyword.
- **`GET /movie/{movie_id}`**: Retrieve detailed information on a specific movie.
- **`GET /movie/{movie_id}/credits`**: Get cast and crew details for a movie.
- **`GET /movie/popular`**: Fetch a list of trending or popular movies.
- **`GET /movie/{movie_id}/images`**: Access images such as posters, backdrops, and stills for a movie.

## Request & Response Format
- **Base URL**: `https://api.themoviedb.org/3` :contentReference[oaicite:3]{index=3}
- **Example Request**:
  ```bash
  GET https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Avengers
