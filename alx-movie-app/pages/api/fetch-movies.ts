import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Call the IMDb Top 100 Movies API
    const response = await fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.MOVIE_API_KEY as string,
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    });

    // Handle fetch failure
    if (!response.ok) {
      return res.status(response.status).json({ message: "Failed to fetch movies" });
    }

    // Parse and return the movie data
    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error fetching movies:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
