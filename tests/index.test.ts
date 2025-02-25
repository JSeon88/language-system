import { describe, expect, it, test } from 'vitest';

const sum = (a: number, b: number) => {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('반복 테스트 sum()', () => {
  it.each([
    {
      input1: 1,
      input2: 2,
      expected: 3,
    },
    {
      input1: 3,
      input2: 4,
      expected: 7,
    },
  ])(`sum($input1, $input2)에 대한 결과로 $expected이 반환 되어야 한다.`, ({ input1, input2, expected }) => {
    expect(sum(input1, input2)).toBe(expected);
  });
});
