export function parseQuantity(str: string): number {
  const trimmed = str.trim();
  if (/\s/.test(trimmed)) {
    const [whole, frac] = trimmed.split(/\s+/);
    const [n, d] = frac.split('/').map(Number);
    return Number(whole) + n / d;
  }
  if (trimmed.includes('/')) {
    const [n, d] = trimmed.split('/').map(Number);
    return n / d;
  }
  return parseFloat(trimmed);
}

export function formatQuantity(value: number): string {
  if (value <= 0.001) return '0';
  const wholePart = Math.floor(value + 1e-6);
  const remainder = value - wholePart;

  if (remainder < 0.04) {
    return wholePart > 0 ? String(wholePart) : String(Math.round(value * 10) / 10);
  }

  const fractions: [number, number][] = [
    [1, 8],
    [1, 4],
    [1, 3],
    [1, 2],
    [2, 3],
    [3, 4],
    [5, 8],
    [7, 8],
  ];
  let best: [number, number] | null = null;
  let bestDiff = Infinity;
  for (const [n, d] of fractions) {
    const diff = Math.abs(remainder - n / d);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = [n, d];
    }
  }

  if (best && bestDiff < 0.045) {
    const fracStr = `${best[0]}/${best[1]}`;
    return wholePart > 0 ? `${wholePart} ${fracStr}` : fracStr;
  }

  const rounded = Math.round(value * 100) / 100;
  return String(rounded);
}

// Splits an ingredient line like "1 1/2 tsp salt" into its leading quantity and the rest.
export function parseIngredient(text: string) {
  const match = text.match(/^(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)(\s*)(.*)$/s);
  if (!match) return null;
  return { baseQty: parseQuantity(match[1]), whitespace: match[2], suffix: match[3] };
}
