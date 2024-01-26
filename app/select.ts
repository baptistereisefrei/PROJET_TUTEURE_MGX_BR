import { sql } from '@vercel/postgres';

export async function getAllUserData(): Promise<any> {
  try {
    const result = await sql`
      SELECT * FROM users
    `;
    
    console.log('Données récupérées avec succès:', result);

    // Assuming you want to return the retrieved data
    return result;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
}
