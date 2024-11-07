export type PageTitleProps = {
  title: string
  route: string
  routeLabel: string
}

export type CardProps = {
  type: 'شالية' | 'شقة' | 'فيلا' | 'ارض' | 'قصر'
  title: string
  image: string
  tag?: string
  location: string
  bathrooms: number
  rooms: number
  price: number
  condition: 'ايجار' | 'بيع'
  nature: 'تجاري' | 'سكني'
}

export type Filters = {
  value: string
  label: string
}[]

export type FilterProps = {
  title?: string
  filters: Filters
  cols?: number
  filter: string
}
