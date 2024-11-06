import { RxDoubleArrowLeft } from 'react-icons/rx'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

type PageTitleProps = {
  title: string
  route: string
  routeLabel: string
}

export default function PageTitle({ title, route, routeLabel }: PageTitleProps) {
  return (
    <div className="w-screen bg-[#CAB07D14]">
      <div className="container mx-auto flex flex-row-reverse items-center justify-between py-4">
        <h1 className="text-gold text-3xl font-semibold">{title}</h1>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${route}`}
                className="text-gold text-xl font-semibold"
              >
                {routeLabel}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxDoubleArrowLeft className="text-black" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-xl font-semibold text-black"
              >
                الرئيسية
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
