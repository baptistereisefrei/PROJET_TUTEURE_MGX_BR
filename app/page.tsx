import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Ouais mon gars</h1>
            <Link href="/newPage">Retour à la page d'accueil</Link>
        </div>
    );
}
