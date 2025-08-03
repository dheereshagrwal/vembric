export const listAllGamesApiData = {
  title: "List All Games",
  description:
    "This endpoint allows you to retrieve a paginated list of all available games. By default, a maximum of ten games are shown per page.",
  method: "GET",
  endpoint: "/v1/games",
  optionalAttributes: [
    {
      name: "limit",
      type: "integer",
      description: "Limit the number of games returned.",
    },
  ],
  model: [
    {
      name: "id",
      type: "string",
      description: "Unique identifier for the game.",
    },
    {
      name: "name",
      type: "string",
      description: "Name of the game.",
    },
    {
      name: "genre",
      type: "string",
      description: "Genre of the game.",
    },
    {
      name: "release_date",
      type: "string",
      description: "Release date in ISO format.",
    },
    {
      name: "developer",
      type: "string",
      description: "Name of the developer or studio.",
    },
  ],
  curl: `curl -G https://api.vembric.chat/v1/games \\
  -H "Authorization: Bearer {token}" \\
  -d limit=10`,
  js: `fetch("https://api.vembric.chat/v1/games?limit=10", {
  headers: {
    Authorization: "Bearer {token}",
  },
});`,
  response: {
    has_more: false,
    data: [
      {
        id: "game1",
        name: "Cyber Blaster",
        genre: "Shooter",
        release_date: "2024-04-15",
        developer: "Vembric Games",
      },
      {
        id: "game2",
        name: "Puzzle Hero",
        genre: "Puzzle",
        release_date: "2023-11-01",
        developer: "Logic Labs",
      },
    ],
  },
};
