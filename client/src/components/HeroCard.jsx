// הכרטיס הלבן: כותרת, תיאור וכפתור כניסה
export default function HeroCard({ onEnter }) {
  return (
    <section className="flex flex-col justify-between rounded-3xl bg-white p-10 lg:p-12">
      <div>
        <p className="text-xl font-bold text-green-600">ברוכים הבאים</p>
        <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
          מוצאים חנייה
          <br />
          פנויה, מיד.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-500">
          כל החניונים במקום אחד. רואים בזמן אמת איפה יש מקום, בוחרים חניון ונכנסים.
        </p>
      </div>

      <button
        onClick={onEnter}
        className="mt-10 flex cursor-pointer items-center gap-3 self-end rounded-xl bg-green-600 px-7 py-4 text-lg font-bold text-slate-900 transition hover:bg-green-500"
      >
        כניסה למפת החניונים
        <span>←</span>
      </button>
    </section>
  )
}
