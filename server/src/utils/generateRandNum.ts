export default function generateRandNum() {
  /** @return 6자리 랜덤 숫자 */
  return Math.floor(100000 + Math.random() * 900000);
}
