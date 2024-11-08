import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { GoPerson } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'

import { NAV_LINKS } from '@/lib/constants/header'

export default function Header() {
  return (
    <header className="py-5">
      <div className="container mx-auto flex items-center justify-between px-3 lg:px-10">
        <div className="flex flex-1 items-center gap-3">
          {/* Login Button */}
          <Link to="/">
            <Button className="hover:bg-gold-button/80 rounded-3xl bg-gold py-6 sm:px-6 sm:py-7">
              <span className="font-bold">تسجيل الدخول</span>
              <GoPerson />
            </Button>
          </Link>

          {/* Search and Heart Icons */}
          <div className="hidden space-x-3 sm:block">
            <Button
              variant="ghost"
              className="h-auto rounded-full border border-gray-border p-3"
            >
              <IoSearchOutline className="text-black" />
            </Button>

            <Button
              variant="ghost"
              className="h-auto rounded-full border border-gray-border p-3"
            >
              <IoIosHeartEmpty className="text-black" />
            </Button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden flex-1 lg:block">
          <ul className="flex flex-row-reverse justify-center gap-4 text-black">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-nowrap border-gold p-1 font-semibold hover:border-b"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <a
          href="/"
          className="flex-1"
        >
          <img
            src="/logo.png"
            alt="aqarat logo"
            className="ml-auto mr-0 w-[100px]"
          />
        </a>
      </div>
    </header>
  )
}
