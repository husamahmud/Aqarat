import { Link } from 'react-router-dom'
import { GoChevronUp } from 'react-icons/go'

import { Button } from '@/components/ui/button.tsx'

import { SOCIAL_ICONS } from '@/lib/constants/socialHeader.ts'
import { FOOTER_LINKS_GROUP } from '@/lib/constants/footer.ts'

/**
 * Smoothly scrolls the window to the top.
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export default function Footer() {
  return (
    <footer className="bg-[#0D192E] pb-10 pt-16">
      <div className="container mx-auto">
        <div className="flex gap-36 border-b border-dashed px-3 pb-6 lg:px-10">
          {/* Footer Links */}
          <div className="flex flex-1 gap-20 [direction:rtl]">
            {FOOTER_LINKS_GROUP.map((group, index) => (
              <div
                key={index}
                className="[direction:rtl]"
              >
                <h3 className="mb-5 font-bold">{group.title}</h3>
                <ul className="space-y-4">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        className="border-gold hover:border-b"
                        to=""
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-5 [direction:rtl]">
            <img
              src="/logo-white.png"
              alt="aqarat logo"
              className="w-[150px]"
            />

            <p className="max-w-xs font-bold [direction:rtl]">
              موقع يوفر لك كل ما تحتاجه في العقارات إضافة .. إعلان .. شراء عقار
            </p>

            <div className="grid grid-cols-2 gap-2">
              <img
                src="/appstore.png"
                alt="appstore"
                className="w-[170px]"
              />
              <img
                src="/huawiesotre.png"
                alt="huawiesotre"
                className="w-[170px]"
              />
              <img
                src="/playstore.png"
                alt="playstore"
                className="w-[170px]"
              />
            </div>
          </div>
        </div>

        <div className="relative flex justify-between pt-3">
          {/* Copyright */}
          <p className="relative flex gap-2 text-white">
            <p>2024 © </p>
            <a
              href="/"
              className="text-gold"
            >
              لموقع عقارات
            </a>
            <span>جميع الحقوق محفوظة</span>
          </p>

          {/* Back to Top Button */}
          <Button
            className="absolute -left-20 top-0 bg-gold-dark hover:bg-gold-darker"
            onClick={scrollToTop}
          >
            <GoChevronUp />
          </Button>

          {/* Social Icons */}
          <div className="flex gap-2">
            {SOCIAL_ICONS.map(({ component: Icon, name }) => (
              <a
                href="/"
                key={name}
              >
                <Icon
                  size={28}
                  className="rounded-full border p-1.5 text-white transition-colors hover:bg-white hover:text-[#0D192E]"
                  aria-label={name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
