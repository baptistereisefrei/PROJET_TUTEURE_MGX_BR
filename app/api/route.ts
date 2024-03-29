import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        prenom VARCHAR(255) NOT NULL,
        nom VARCHAR(255) NOT NULL,
        mail VARCHAR(255) NOT NULL,
        telephone VARCHAR(15) NOT NULL
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}