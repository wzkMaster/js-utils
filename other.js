//产生某个范围内的随机整数，不包括max
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//将函数记忆化
export function memoize(callback) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = callback(...args);
    cache.set(key, result);
    return result;
  };
}
