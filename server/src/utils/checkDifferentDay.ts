export function checkDifferentDay(x: Date, y: Date) {
  if (x.getFullYear() !== y.getFullYear()) return true;
  if (x.getMonth() !== y.getMonth()) return true;
  if (x.getDate() !== y.getDate()) return true;

  return false;
}

export function checkYesterday({
  today,
  target,
}: {
  today: Date;
  target: Date;
}) {
  const yesterday = target;
  yesterday.setDate(target.getDate() + 1);

  return (
    yesterday.getFullYear() === today.getFullYear() &&
    yesterday.getMonth() === today.getMonth() &&
    yesterday.getDate() === today.getDate()
  );
}
