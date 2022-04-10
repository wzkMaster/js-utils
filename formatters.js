// 第一个参数是代表所在位置的字符串，若为undefined，则使用本机默认的位置
const NUMBER_FORMATTER = new Intl.NumberFormat(undefined);
export function formatNumber(number) {
  return NUMBER_FORMATTER.format(number);
}
formatNumber(24902); // 24,902
// 第二个参数可以指定采用特定的形式格式化数字，如货币、科学计数法、缩略法等，同时也可以指定货币种类
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "CNY",
  style: "currency",
});
export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
formatCurrency(24902); // ￥24,902.00
// 缩略数字
const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
export function formatCompactNumber(number) {
  return COMPACT_NUMBER_FORMATTER.format(number);
}
formatCompactNumber(24902); // 2.5万
