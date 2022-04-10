// 简化全局事件的添加
export function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e);
    },
    options
  );
}
// 简化document.querySelector
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// 简化document.querySelectorAll
export function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]; // 转化为数组，便于利用数组方法
}
// 简化元素创建，直接在创建时添加属性
export function createElement(type, options = {}) {
  const element = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(value);
      return;
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (key === "text") {
      element.textContent = value;
      return;
    }

    element.setAttribute(key, value);
  });
  return element;
}
