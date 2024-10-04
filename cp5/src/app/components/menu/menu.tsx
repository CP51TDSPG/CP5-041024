import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="./teoria-mitologia"></Link></li>
                <li><Link href="/about"></Link></li>
                <li><Link href="/users">Users</Link></li>
            </ul>
            <div>
                <h2> Worlds in Collision de Immanuel Velikovsky </h2>
                <p>"Worlds in Collision" é um livro escrito pelo psiquiatra e pensador
                    Immanuel Velikovsky, publicado em 1950. É uma obra controversa de pseudo-história
                    e pseudo-ciência que propõe uma série de teorias revolucionárias sobre a história
                    cósmica da Terra, baseadas em interpretações alternativas de textos antigos,
                    mitologia, e eventos astronômicos.</p>

                <h2>Principais Ideias do Livro</h2>
                <p>No "Worlds in Collision", Velikovsky argumenta que a Terra passou por
                    catástrofes cósmicas causadas por interações com outros corpos celestes,
                    especialmente Vênus e Marte. Ele sugere que eventos violentos no sistema
                    solar provocaram profundas mudanças no clima e na geologia da Terra e tiveram
                    um impacto direto nas civilizações antigas.</p>

            </div>
        </nav>
    );
}