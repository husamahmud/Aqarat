import { Link } from 'react-router-dom'

import { SOCIAL_ICONS } from '@/lib/constants/socialHeader.ts'
import { FOOTER_LINKS_GROUP } from '@/lib/constants/footer.ts'

export default function Footer() {
  return (
    <footer className="bg-[#0D192E] pb-10 pt-16">
      <div className="container relative mx-auto">
        <div className="flex flex-col items-center gap-5 border-b border-dashed px-3 pb-6 md:flex-row md:gap-10 lg:gap-36 lg:px-10">
          {/* Footer Links */}
          <div className="grid flex-1 grid-cols-1 gap-5 [direction:rtl] md:flex md:gap-20">
            {FOOTER_LINKS_GROUP.map((group, index) => (
              <div
                key={index}
                className="[direction:rtl]"
              >
                <h3 className="mb-5 text-center font-bold text-stone-50 dark:text-stone-50 sm:text-right">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-center sm:text-right md:space-y-4">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        className="text-nowrap border-gold text-stone-50 hover:border-b dark:text-stone-50"
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

            <p className="font-bold text-stone-50 [direction:rtl] dark:text-stone-50 md:max-w-xs">
              موقع يوفر لك كل ما تحتاجه في العقارات إضافة .. إعلان .. شراء عقار
            </p>

            <div className="grid grid-cols-3 gap-2 md:grid-cols-1 lg:grid-cols-2">
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

        <div className="flex flex-col items-center justify-center gap-5 px-3 pb-5 pt-8 md:flex-row md:justify-between lg:px-10">
          {/* Copyright */}
          <p className="flex gap-2 text-white">
            <p>2024 © </p>
            <a
              href="/"
              className="text-gold"
            >
              لموقع عقارات
            </a>
            <span>جميع الحقوق محفوظة</span>
          </p>

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
