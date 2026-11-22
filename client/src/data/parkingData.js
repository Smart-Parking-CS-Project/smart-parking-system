// נתונים מדומים – בהמשך יגיעו מהשרת (Backend)
// כל מחרוזת = 30 חניות: '1' = תפוסה, '0' = פנויה
const toSpots = (pattern) =>
  pattern.split('').map((ch, i) => ({ id: i + 1, occupied: ch === '1' }))

export const parkingLots = [
  { id: 'A', name: 'חניון A', spots: toSpots('001011001110010100111100100110') },
  { id: 'B', name: 'חניון B', spots: toSpots('110100101001101110011011010110') },
  { id: 'C', name: 'חניון C', spots: toSpots('000010010001000010000010000001') },
]
