import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { LANGUAGES, SOCIAL_ICONS } from '@/lib/constants/socialHeader'

export default function SocialHeader() {
  return (
    <div className="bg-[#0D192E]">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Language Selector */}
        <Select>
          <SelectTrigger className="w-[130px] border-none">
            <SelectValue
              placeholder={
                <p className="flex items-center gap-2">
                  <span className="">{LANGUAGES[0].name}</span>
                  <span className="text-lg">{LANGUAGES[0].flag}</span>
                </p>
              }
            />
            g
          </SelectTrigger>
          <SelectContent className="w-full">
            {LANGUAGES.map(({ lang, name, flag }) => (
              <SelectItem
                key={lang}
                value={lang}
                className="justify-end pr-4"
              >
                <p className="flex items-center gap-2">
                  <span className="">{name}</span>
                  <span className="text-lg">{flag}</span>
                </p>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Social Icons */}
        <div className="flex gap-2">
          {SOCIAL_ICONS.map(({ component: Icon, name }) => (
            <a href="/">
              <Icon
                key={name}
                size={28}
                className="rounded-full border p-1.5 text-white transition-colors hover:bg-white hover:text-[#0D192E]"
                aria-label={name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
