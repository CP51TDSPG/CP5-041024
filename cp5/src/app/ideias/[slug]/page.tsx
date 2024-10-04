'use client';
import Image from "next/image";
const ideas = {
    '1': {
      description: 'A primeira ideia fala sobre a catástrofe global e sua relação com a aproximação de Vênus.',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA23780/PIA23780~medium.jpg',
      altText: 'Representação da catástrofe global relacionada a Vênus'
    },
    '2': {
      description: 'A segunda ideia propõe que eventos astronômicos estão conectados a mitos antigos.',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA00342/PIA00342~medium.jpg',
      altText: 'Eventos astronômicos relacionados a mitos antigos'
    },
    '3': {
      description: 'A terceira ideia discute o impacto de eventos cósmicos na civilização humana.',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA00003/PIA00003~medium.jpg',
      altText: 'Impacto de eventos cósmicos na civilização humana'
    }
  };

export default function IdeaPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const ideia = ideas[slug as keyof typeof ideas];
    if (!ideia) {
        return <p>Chave inválida</p>;
      }
  
    return (
        <div>
        <h1>Ideias do Autor de "Worlds in Collision"</h1>
        <h3>Ideia {slug}:</h3>
        <p>{ideia.description}</p>
        <Image 
          src={ideia.imageUrl} 
          alt={ideia.altText} 
          width={800}
          height={500} 
          layout="responsive"
          priority={true}
        />
      </div>
    );
  }
