import { mockApiData } from '../../data/mockApiData';

export async function GET() {
  return Response.json(mockApiData);
}
