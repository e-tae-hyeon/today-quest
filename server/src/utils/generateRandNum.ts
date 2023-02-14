/** @return 6자리 랜덤 숫자 */
export function generateRandSixDigit() {
  return Math.floor(100000 + Math.random() * 900000);
}

export function generateRandNum(max: number) {
  return Math.floor(Math.random() * max);
}
