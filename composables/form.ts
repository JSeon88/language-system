/**
 * 컴포저블 예제
 * @param {number} initialCount 초기 카운트 값
 * @returns
 */
export const useExample = (initialCount: number) => {
  const count = ref(initialCount);

  const increase = () => {
    count.value++;
  };

  const decrease = () => {
    count.value--;
  };

  return {
    count,
    increase,
    decrease,
  };
};
