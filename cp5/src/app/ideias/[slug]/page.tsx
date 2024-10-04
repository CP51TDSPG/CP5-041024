import { useRouter } from 'next/router';

const ideas = {
  '1': 'A primeira ideia fala sobre a catástrofe global e sua relação com a aproximação de Vênus.',
  '2': 'A segunda ideia propõe que eventos astronômicos estão conectados a mitos antigos.',
  '3': 'A terceira ideia discute o impacto de eventos cósmicos na civilização humana.'
};

export default function IdeaPage() {
  const router = useRouter();
  const { slug } = router.query;
  const key = Array.isArray(slug) ? slug[0] : slug;
  const content = ideas[key as keyof typeof ideas] || 'Chave inválida';
  
  return (
    <div>
      <h1>{key?.replace('-', ' ').toUpperCase()}</h1>
      <p>{content}</p>
    </div>
  );
  
}
