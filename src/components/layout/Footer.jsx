import { Link } from 'react-router-dom'
import { navGroups } from '../../data/products'

const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map']

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-mist">
      <div className="mx-auto max-w-shell px-6 py-12">
        <p className="text-xs leading-relaxed text-steel">
          DEMCHADA® is an independent, fictional concept brand created for demonstration purposes.
          All product names, specifications and pricing on this site are invented and do not
          represent real merchandise. Not affiliated with, endorsed by, or associated with Apple
          Inc. or any other company.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-hairline pt-10 text-sm sm:grid-cols-3 md:grid-cols-6">
          {navGroups.map((g) => (
            <div key={g.label}>
              <h4 className="mb-3 font-medium text-graphite">{g.label}</h4>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/products/${item.slug}`} className="text-steel hover:text-graphite transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-hairline pt-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} DEMCHADA®. All rights reserved (fictional entity).</p>
          <ul className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <li key={l} className="hover:text-graphite transition-colors cursor-default">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
