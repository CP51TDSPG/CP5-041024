import Link from "next/link"

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Página Principal</Link>
        </li>
        <li>
          <Link href="/ideias">Ideias de Immanuel Velikovsky</Link>
        </li>
        <li>
          <Link href="/nasa">Lista de imagens</Link>
        </li>
      </ul>
    </nav>
  )
}
