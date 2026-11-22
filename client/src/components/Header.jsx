// כותרת עליונה: לוגו + תגית סטטוס חיישנים
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div dir="ltr" className="text-3xl font-black text-slate-900">
        SmartPark
        <span className="relative">
          ı
          <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-green-500" />
        </span>
        ng
      </div>

      <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        חיישנים מחוברים
      </span>
    </header>
  )
}
