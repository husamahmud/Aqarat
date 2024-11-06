export default function AvailableMzadat({ count }: { count: number }) {
  return (
    <div className="flex items-end space-x-2">
      <p className="text-gold-dark font-bold">({count})</p>
      <h1 className="text-3xl font-bold text-[#554A35]">المزادات المتاحة</h1>
    </div>
  )
}
