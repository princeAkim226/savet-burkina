import { Mail, MapPin, Phone, Leaf, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-primary/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-primary">SAVET Burkina</h3>
            </div>
            <p className="text-gray-600">
              Votre partenaire en santé, nutrition et bien-être animal au Burkina Faso
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                01 B.P. 363, Bobo-Dioulasso 01, BURKINA FASO
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:infos@savet-burkina.com" className="hover:text-primary transition-colors">
                  infos@savet-burkina.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+22600000000" className="hover:text-primary transition-colors">
                  +226 00 00 00 00
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Liens Rapides</h3>
            <ul className="space-y-3">
              {[
                ['Nos Produits', '/produits'],
                ['Nos Services', '/services'],
                ['À Propos', '/about'],
                ['Contact', '/contact']
              ].map(([title, url]) => (
                <li key={url}>
                  <Link 
                    href={url} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/savetburkina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/savetburkina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/savetburkina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary/20 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} SAVET Burkina. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer