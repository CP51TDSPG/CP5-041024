import Link from 'next/link';

export default function IdeasPage() {
  return (
    <div>
      <h1>Ideias do Autor de "Worlds in Collision"</h1>
      <ul>
        <li>
          <Link href="/ideias/1">Ideia 1: Catástrofe Global</Link>
        </li>
        <li>
          <Link href="/ideias/2">Ideia 2: Mitos Astronômicos</Link>
        </li>
        <li>
          <Link href="/ideias/3">Ideia 3: Impactos Cósmicos</Link>
        </li>
      </ul>
    </div>
  );
}
