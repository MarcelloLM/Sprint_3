import { mockApiData } from '../data/mockApiData';

export async function fetchPlayers() {
  return Promise.resolve(mockApiData.players);
}

export async function fetchTeamStats() {
  return Promise.resolve(mockApiData.stats);
}
