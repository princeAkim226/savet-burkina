import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Produits Vétérinaires",
      description: "Large gamme de produits vétérinaires de qualité pour tous vos besoins en santé animale."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Nutrition Animale",
      description: "Solutions nutritionnelles adaptées pour optimiser la santé et la croissance de vos animaux."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Assistance & Conseils",
      description: "Expertise professionnelle et conseils personnalisés pour le bien-être de vos animaux."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3"
          alt="SAVET Burkina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SAVET Burkina
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Votre partenaire de confiance en santé, nutrition et bien-être animal au Burkina Faso
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="default" className="bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/produits">Nos Produits</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white" asChild>
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3"
                alt="Dr Abdoul Aziz TIAMA"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">À Propos de SAVET</h2>
              <p className="text-gray-600 mb-6">
                SAVET Burkina, dirigé par le Dr Abdoul Aziz TIAMA, est votre partenaire de confiance 
                en matière de santé et de nutrition animale. Notre engagement envers l'excellence et 
                notre expertise approfondie nous permettent de fournir des solutions complètes pour 
                le bien-être de vos animaux.
              </p>
              <Button asChild>
                <Link href="/about">En Savoir Plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}