// שמות class מלאים – Tailwind לא מזהה שמות שמורכבים דינמית
const colors = {
  green: { dot: 'bg-green-600', text: 'text-green-600' },
  red: { dot: 'bg-red-600', text: 'text-red-600' },
}

// כרטיס מספר: פנויות / תפוסות
export default function StatCard({ label, value, color }) {
  const c = colors[color]
  return (
    <div className="flex min-h-56 flex-col justify-between rounded-3xl bg-white p-7">
      <p className="flex items-center gap-2 text-slate-600">
        <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
        {label}
      </p>
      <p className={`self-end text-6xl font-black ${c.text}`}>{value}</p>
    </div>
  )
}
