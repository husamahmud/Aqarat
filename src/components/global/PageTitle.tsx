import { RxDoubleArrowLeft } from 'react-icons/rx'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { PageTitleProps } from '@/types/types.ts'

export default function PageTitle({ title, route, routeLabel }: PageTitleProps) {
  return (
    <div className="my-10 hidden w-screen bg-[#CAB07D14] lg:block">
      <div className="container mx-auto flex flex-row-reverse items-center justify-between px-3 py-6 lg:px-10">
        <h1 className="text-3xl font-semibold text-gold">{title}</h1>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${route}`}
                className="text-xl font-semibold text-gold"
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
