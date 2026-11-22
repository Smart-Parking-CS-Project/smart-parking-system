import { useState } from 'react'
import Header from '../components/Header'
import HeroCard from '../components/HeroCard'
import ParkingPreview from '../components/ParkingPreview'
import StatCard from '../components/StatCard'
import { parkingLots } from '../data/parkingData'

export default function WelcomePage() {
  const [selectedLotId, setSelectedLotId] = useState('A')

  const selectedLot = parkingLots.find((lot) => lot.id === selectedLotId)
  const occupied = selectedLot.spots.filter((s) => s.occupied).length
  const free = selectedLot.spots.length - occupied

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <Header />

        <main className="mt-8 grid gap-5 lg:grid-cols-2">
          <HeroCard onEnter={() => console.log('בהמשך: מעבר למפת החניונים')} />

          <div className="flex flex-col gap-5">
            <ParkingPreview
              lots={parkingLots}
              selectedLot={selectedLot}
              onSelectLot={setSelectedLotId}
            />
            <div className="grid grid-cols-2 gap-5">
              <StatCard label={`פנויות ב${selectedLot.name}`} value={free} color="green" />
              <StatCard label={`תפוסות ב${selectedLot.name}`} value={occupied} color="red" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
