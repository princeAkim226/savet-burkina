import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/sections/contact-form"

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nos Coordonnées</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Adresse</h3>
                <p className="text-gray-600">01 B.P. 363, Bobo-Dioulasso 01, BURKINA FASO</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:dr.tiamaazizabdoul@gmail.com" className="text-gray-600 hover:text-primary">
                  dr.tiamaazizabdoul@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <a href="tel:+22600000000" className="text-gray-600 hover:text-primary">
                  +226 00 00 00 00
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}