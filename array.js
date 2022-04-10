import { randomNumber } from "./other";
// 获取数组的前n个元素
export function first(array, n = 1) {
  if (n === 1) return array[0];
  return array.filter((_, index) => index < n);
}
// 获取数组的后n个元素
export function last(array, n = 1) {
  if (n === 1) return array[array.length - 1];
  return array.filter((_, index) => index >= array.length - n);
}
// 随机获取数组中n个元素
export function sample(array, count = 1) {
  if (count === 1) return array[randomNumber(0, array.length)];
  return Array(count)
    .fill(0)
    .map(() => array[randomNumber(0, array.length)]);
}
// 将对象数组中的某个属性抽取成数组
export function pluck(array, key) {
  return array.filter((e) => e[key]);
}
// 根据指定属性对数组进行分组
export function groupBy(array, key) {
  return array.reduce((group, element) => {
    const value = element[key];
    return { ...group, [value]: [...(group[value] ?? []), element] };
  }, {});
}
