import Image from "next/image"
export default function Colapsos() {
    return (
        <div>
            <h1>Teoria de Catástrofes</h1>
            <p>
                Velikovsky propõe que eventos catastróficos, como passagens próximas de planetas,
                influenciaram a história da Terra e a evolução das civilizações.
            </p>
            <Image
                src="https://images.nasa.gov/details/PIA09579"
                alt="Descrição da imagem"
                width={500}
                height={300}
            />
        </div>
    )
}