'use client';
import Image from "next/image";
const ideas = {
  "1": {
    nome: "Catástrofe Global",
    description:
      "Immanuel Velikovsky desenvolveu a ideia de que a Terra foi repetidamente atingida por catástrofes globais que tiveram origem nos corpos celestes. Em seu livro Worlds in Collision (Mundos em Colisão), ele sugere que eventos catastróficos de origem astronômica moldaram tanto a geologia quanto a história humana. Segundo Velikovsky, planetas como Vênus e Marte passaram muito próximos da Terra, provocando distúrbios maciços, como terremotos, maremotos, mudanças climáticas repentinas e extinções em massa. Essas catástrofes, que aconteceram em períodos históricos relativamente recentes, foram registradas em mitos, textos religiosos e tradições culturais ao redor do mundo.A primeira ideia fala sobre a catástrofe global e sua relação com a aproximação de Vênus.",
    description2:
      "Velikovsky desafiou as visões científicas tradicionais da época, sugerindo que os eventos cataclísmicos não foram raros na história da Terra, mas sim comuns e parte de um ciclo cósmico maior. A ideia de Catástrofe Global de Velikovsky buscava explicar como civilizações antigas testemunharam e sobreviveram a esses eventos, deixando vestígios nos mitos e narrativas.",
    imageUrl:
      "https://images-assets.nasa.gov/image/PIA23780/PIA23780~medium.jpg",
    altText: "Representação da catástrofe global relacionada a Vênus",
  },
  "2": {
    nome: "Mitos Astronômicos",
    description:
      "Velikovsky acreditava que muitos mitos e histórias religiosas, que durante muito tempo foram considerados como meras lendas, na verdade, têm uma base real e astronômica. Ele argumentava que os povos antigos testemunharam grandes eventos cósmicos, como colisões de planetas ou passagens próximas, e registraram essas experiências em suas mitologias. De acordo com Velikovsky, a mitologia astronômica não é apenas simbólica, mas descreve eventos astronômicos reais que afetaram profundamente o planeta Terra.A segunda ideia propõe que eventos astronômicos estão conectados a mitos antigos.",
    description2:
      "Por exemplo, ele interpretou os mitos de deuses guerreiros e batalhas celestiais como alegorias para interações violentas entre planetas. Para ele, as representações antigas de Vênus e Marte como entidades poderosas e destrutivas refletem suas órbitas instáveis e os impactos catastróficos que essas aproximações tiveram na Terra. Essa abordagem desafiou a separação tradicional entre mitologia e ciência, sugerindo que os mitos são registros antigos de fenômenos astronômicos observados por nossos ancestrais.",
    imageUrl:
      "https://images-assets.nasa.gov/image/PIA00342/PIA00342~medium.jpg",
    altText: "Eventos astronômicos relacionados a mitos antigos",
  },
  "3": {
    nome: "Impactos Cósmicos",
    description:
      "A teoria dos Impactos Cósmicos de Velikovsky defende que colisões ou aproximações de grandes corpos celestes (como planetas ou cometas) com a Terra resultaram em profundas mudanças no ambiente terrestre. Ele propôs que essas interações cósmicas não apenas causaram catástrofes naturais, mas também tiveram impactos culturais, alterando civilizações e mudando o curso da história humana.",
    description2:
      "Um dos exemplos mais notáveis dessa teoria foi sua sugestão de que Vênus, originalmente um cometa ejetado de Júpiter, teria passado perto da Terra em um passado relativamente recente. Este evento, segundo Velikovsky, teria causado grandes convulsões geológicas e climáticas. Ele argumentava que os distúrbios magnéticos e gravitacionais provocados por esses corpos celestes explicam fenômenos como a inversão dos polos magnéticos e mudanças abruptas nas marés. A teoria dos Impactos Cósmicos de Velikovsky foi extremamente controversa, mas seu trabalho lançou uma luz sobre a ideia de que os corpos celestes podem ter desempenhado um papel mais ativo na história da Terra do que a ciência convencional admitia na época.",
    imageUrl:
      "https://images-assets.nasa.gov/image/PIA00003/PIA00003~medium.jpg",
    altText: "Impacto de eventos cósmicos na civilização humana",
  },
}

export default function IdeaPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const ideia = ideas[slug as keyof typeof ideas];
    if (!ideia) {
        return <p>Chave inválida</p>;
      }
  
    return (
        <div >
        <h1>Ideias do Autor de "Worlds in Collision"</h1>
        <h2>{ideia.nome}</h2>
        <p>{ideia.description}</p>
        <p>{ideia.description2}</p>
        <Image 
          src={ideia.imageUrl} 
          alt={ideia.altText} 
          width={800}
          height={200} 
          layout="responsive"
          priority={true}
          />
      </div>
    );
  }
