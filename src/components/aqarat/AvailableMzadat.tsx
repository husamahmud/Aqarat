export default function AvailableMzadat({ count }: { count: number }) {
  return (
    <div className="flex items-end space-x-2">
      <p className="font-bold text-gold-dark">({count})</p>
      <h1 className="text-3xl font-bold text-[#554A35]">العقارات المتاحة</h1>
    </div>
  )
}
