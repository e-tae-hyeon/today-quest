export default function getRandomPick(values: any[]) {
  const index = Math.floor(Math.random() * values.length);

  return values[index];
}
