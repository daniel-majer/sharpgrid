export function formatNumber(num: number) {
  return num.toLocaleString();
}

export function percent(filled: number, total: number) {
  if (!total) return "0.0%";
  return `${((filled / total) * 100).toFixed(1)}%`;
}
