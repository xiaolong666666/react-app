export const getRandomId = () => Math.random().toString(10).slice(2, 8);

export const getRandomColor = () =>
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")
    .toUpperCase();

export const getRandomHeight = (height = 300) => ~~(Math.random() * height);

export const debounce = (fn: () => void, delay: number) => {
  let timer: number | null = null;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    // @ts-ignore
    timer = setTimeout(() => fn(...args), delay);
  };
};
