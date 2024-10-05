export async function getNasaImages() {
  const response = await fetch("https://wilsjame.github.io/how-to-nasa/")
  if (!response.ok) {
    throw new Error("Falha ao buscar as imagens da API da NASA")
  }
  const data = await response.json()
  return data
}
