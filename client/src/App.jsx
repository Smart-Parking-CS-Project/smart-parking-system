function App() {
  return (
    // מיכל ראשי: תופס את כל גובה המסך (min-h-screen), רקע אפור-כהה אלגנטי (bg-slate-900), ומרכז את התוכן
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6" dir="rtl">
      
      {/* כרטיס מרכזי לעמוד הפתיחה */}
      <div className="max-w-2xl w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl text-center">
        
        {/* אייקונים של רמזור חניה (ירוק ואדום) להמחשת המערכת */}
        <div className="flex justify-center gap-4 mb-6">
          <span className="w-6 h-6 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"></span>
          <span className="w-6 h-6 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></span>
        </div>

        {/* כותרת ראשית */}
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          מערכת ניהול חניון חכם
        </h1>

        {/* תת-כותרת ותיאור קצר */}
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          ברוכים הבאים למערכת הבקרה והניטור בזמן אמת. צפו בסטטוס החניות, עקבו אחר חיישני ה-LoRa ונהלו את תפוסת החניון בלחיצת כפתור.
        </p>

        {/* כרטיסיות מידע מהירות (תצוגה מקדימה של נתונים) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
            <p className="text-slate-400">חניות פנויות</p>
            <p className="text-2xl font-bold text-green-400 mt-1">--</p>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
            <p className="text-slate-400">חניות תפוסות</p>
            <p className="text-2xl font-bold text-red-400 mt-1">--</p>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
            <p className="text-slate-400">סטטוס חיישנים</p>
            <p className="text-2xl font-bold text-blue-400 mt-1">מחובר</p>
          </div>
        </div>

        {/* כפתור כניסה למערכת */}
        <button 
          onClick={() => alert("בקרוב נעבור מכאן למפת החניון בזמן אמת!")}
          className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-slate-950 font-bold py-3 px-8 rounded-xl transition duration-200 shadow-lg shadow-green-500/20 cursor-pointer"
        >
          כניסה למפת החניון
        </button>

      </div>
    </div>
  );
}

export default App;
