'use client'
import { useEffect, useState } from "react"
import { getNasaImages } from "../api/route"

export default function NasaImages() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await getNasaImages()
        setImages(data.collection.items)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>Imagens da NASA</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <img
              src={image.links[0].href}
              alt={image.data[0].title}
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <h3>{image.data[0].title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
