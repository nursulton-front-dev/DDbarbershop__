const PRICE_SUFFIX = "so'm";

// Minglar oralig'i bo'sh joy bilan ajratiladi: 200 000 so'm.
// Narx qator oxirida bo'linib ketmasligi uchun uzilmaydigan bo'shliq (U+00A0).
const NON_BREAKING_SPACE = " ";

/** 200000 -> "200 000 so'm" */
export function formatPrice(amount: number): string {
  const grouped = new Intl.NumberFormat("uz-UZ", {
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace(/[\s,]/g, NON_BREAKING_SPACE);

  return `${grouped}${NON_BREAKING_SPACE}${PRICE_SUFFIX}`;
}
