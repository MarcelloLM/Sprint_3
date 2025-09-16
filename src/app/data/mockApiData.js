// src/app/data/mockApiData.js
export const mockApiData = {
  "teamName": "Passa a Bola FC",
  "season": "2024",
  "stats": { "gamesPlayed": 15, "wins": 10, "draws": 3, "losses": 2, "goalsFor": 42, "goalsAgainst": 15 },
  "players": [
    {
      "id": 1,
      "name": "Júlia Artilheira",
      "position": "Atacante",
      "number": 9,
      "goals": 18,
      "assists": 7,
      "bio": "Principal goleadora da equipe, conhecida por sua finalização precisa e velocidade. Demonstra liderança em campo e é uma inspiração para as jogadoras mais jovens.",
      "imageUrl": "https://placehold.co/400x400/7E22CE/FFFFFF?text=JA",
      "statsHistory": [
        { "season": "2022", "goals": 14, "assists": 5 },
        { "season": "2023", "goals": 16, "assists": 6 },
        { "season": "2024", "goals": 18, "assists": 7 }
      ],
      "isPlayerOfTheWeek": true,
      "highlightStat": "Marcou 2 gols decisivos na última partida!"
    },
    {
      "id": 2,
      "name": "Beatriz Meio-Campo",
      "position": "Meio-Campo",
      "number": 10,
      "goals": 6,
      "assists": 15,
      "bio": "A maestrina do time. Controla o ritmo do jogo com passes incríveis e visão de jogo. Sua capacidade de antecipar jogadas é fundamental para a estratégia da equipe.",
      "imageUrl": "https://placehold.co/400x400/C026D3/FFFFFF?text=BM",
      "statsHistory": [
        { "season": "2022", "goals": 5, "assists": 10 },
        { "season": "2023", "goals": 7, "assists": 12 },
        { "season": "2024", "goals": 6, "assists": 15 }
      ]
    },
    {
      "id": 3,
      "name": "Carla Zagueira",
      "position": "Defensora",
      "number": 4,
      "goals": 1,
      "assists": 2,
      "bio": "Uma muralha na defesa. Líder em desarmes e interceptações, garantindo a segurança da equipe. Sua força física e posicionamento são seus maiores trunfos.",
      "imageUrl": "https://placehold.co/400x400/9333EA/FFFFFF?text=CZ",
      "statsHistory": [
        { "season": "2022", "goals": 2, "assists": 1 },
        { "season": "2023", "goals": 1, "assists": 3 },
        { "season": "2024", "goals": 1, "assists": 2 }
      ]
    }
  ]
};
