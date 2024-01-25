import { sql } from '@vercel/postgres';

export async function insertUserData(prenom: string, nom: string, mail: string, telephone: string): Promise<void> {
  try {
    const result = await sql`
      INSERT INTO users (prenom, nom, mail, telephone)
      VALUES (${prenom}, ${nom}, ${mail}, ${telephone})
    `;
    console.log('Données insérées avec succès:', result);
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données:', error);
    throw error;
  }
}