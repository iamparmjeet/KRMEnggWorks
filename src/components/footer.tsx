import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">About</h4>
            <div className="flex flex-col items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-white font-bold">KRM</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your Trusted and Leading Partner and Top Certified IndiasMart Seller in Your Building & Construction Machines Manufacturer.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+91 86045 07464</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+91 8600 33282</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">info@krmenggworks.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">krmenggworks@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Deosth Deoria, Deoria, Uttar Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Signup to get the latest news.
            </p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-gray-500 text-sm"
              />
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-2 rounded text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-sm text-gray-400">
              © 2024 | All rights reserved | Made with ♥ by Farm
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <span className="text-lg">📱</span>
              </Link>
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <span className="text-lg">f</span>
              </Link>
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <span className="text-lg">👤</span>
              </Link>
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <span className="text-lg">▶️</span>
              </Link>
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <span className="text-lg">💬</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
