/**
 * API utility functions for fetching player and team data.
 * Replace mock data with real API calls here.
 */

import { mockApiData } from '../data/mockApiData';

export async function fetchPlayers() {
  // Return mock data directly
  return Promise.resolve(mockApiData.players);
}

export async function fetchTeamStats() {
  // Return mock data directly
  return Promise.resolve(mockApiData.stats);
}
