import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Perth Accessible Taxi</h3>
            <p className="text-sm">
              Premium wheelchair-accessible transportation in Perth, Western Australia. 
              Reliable, safe, and comfortable airport transfers and everyday travel.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Areas We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations/fremantle" className="hover:text-white transition-colors">Fremantle</Link></li>
              <li><Link href="/locations/joondalup" className="hover:text-white transition-colors">Joondalup</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors font-medium text-accent-green">View All Suburbs &rarr;</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/61400000000" className="hover:text-white transition-colors">WhatsApp: +61 400 000 000</a></li>
              <li><a href="tel:+61400000000" className="hover:text-white transition-colors">Phone: +61 400 000 000</a></li>
              <li><a href="mailto:contact@example.com" className="hover:text-white transition-colors">Email: contact@example.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Perth Accessible Taxi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
