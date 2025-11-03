import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "NutriAfrique",
    desc: "Fournisseur leader en nutrition animale en Afrique de l’Ouest.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png",
  },
  {
    name: "VetGlobal",
    desc: "Spécialiste international en médicaments vétérinaires innovants.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png",
  },
  {
    name: "Ministère de l'Élevage Burkina",
    desc: "Appui institutionnel & accompagnement technique au secteur animal.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png",
  },
];

export default function PartenairesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Nos Partenaires</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((p, index) => (
          <Card key={index} className="flex flex-col items-center py-8">
            <CardContent className="flex flex-col items-center">
              <Image src={p.logo} alt={p.name} width={100} height={70} className="object-contain mb-4 bg-gray-100 rounded-lg" />
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
              <p className="text-gray-600 text-center">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
