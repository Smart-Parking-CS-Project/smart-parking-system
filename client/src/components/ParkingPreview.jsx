import { useState } from 'react'

// מקרא קטן: ריבוע צבע + טקסט
function Legend({ color, label }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-3 w-3 rounded-sm ${color}`} />
      {label}
    </span>
  )
}

// הכרטיס הכהה: בחירת חניון + רשת החניות
export default function ParkingPreview({ lots, selectedLot, onSelectLot }) {
  const [hoveredSpot, setHoveredSpot] = useState(null)

  return (
    <section className="rounded-3xl bg-slate-900 p-7">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 rounded-xl bg-slate-800 p-1">
          {lots.map((lot) => (
            <button
              key={lot.id}
              onClick={() => onSelectLot(lot.id)}
              className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-bold transition ${
                lot.id === selectedLot.id
                  ? 'bg-white text-slate-900'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lot.name}
            </button>
          ))}
        </div>

        <div className="flex gap-4 text-sm text-slate-300">
          <Legend color="bg-green-600" label="פנוי" />
          <Legend color="bg-red-600" label="תפוס" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-10 gap-2">
        {selectedLot.spots.map((spot) => (
          <div
            key={spot.id}
            onMouseEnter={() => setHoveredSpot(spot)}
            onMouseLeave={() => setHoveredSpot(null)}
            className={`h-9 cursor-pointer rounded-lg transition hover:scale-110 ${
              spot.occupied ? 'bg-red-600' : 'bg-green-600'
            }`}
          />
        ))}
      </div>

      <p className="mt-4 h-5 text-sm text-slate-300">
        {hoveredSpot
          ? `חנייה ${hoveredSpot.id}: ${hoveredSpot.occupied ? 'תפוסה' : 'פנויה'}`
          : 'העבירו את העכבר על חנייה כדי לראות את הסטטוס שלה'}
      </p>
    </section>
  )
}
