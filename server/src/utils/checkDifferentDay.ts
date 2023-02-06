export default function checkDifferentDay(x: Date, y: Date) {
  if (x.getFullYear() !== y.getFullYear()) return true;
  if (x.getMonth() !== y.getMonth()) return true;
  if (x.getDate() !== y.getDate()) return true;

  return false;
}
