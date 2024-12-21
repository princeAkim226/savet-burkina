import { HeroSection } from "@/components/sections/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    category: "Médicaments",
    items: [
      {
        name: "Antibiotiques",
        description: "Large gamme d'antibiotiques pour différentes pathologies.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3"
      },
      {
        name: "Antiparasitaires",
        description: "Solutions efficaces contre les parasites internes et externes.",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3"
      }
    ]
  },
  {
    category: "Nutrition",
    items: [
      {
        name: "Compléments Alimentaires",
        description: "Vitamines et minéraux pour une santé optimale.",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-4.0.3"
      },
      {
        name: "Aliments Spécialisés",
        description: "Nutrition adaptée aux besoins spécifiques.",
        image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3"
      }
    ]
  }
]

export default function ProductsPage() {
  return (
    <div>
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1516382799247-87df95d790b7?ixlib=rb-4.0.3"
          alt="Produits SAVET"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nos Produits</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Des solutions complètes pour la santé et la nutrition de vos animaux
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {products.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((product, productIndex) => (
                <Card key={productIndex} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button>En savoir plus</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}