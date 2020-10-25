import {ArrayHelper} from './array.helper';

describe('ArrayHelper', () => {
  const arr = [1, 2, 3];
  it(
    'should be `[1, 2, 3]`',
    () => {
      expect(ArrayHelper.move(arr, 1, 22)).toEqual(arr);
    }
  );

  it(
    'should be `[1, 3, 2]`',
    () => {
      expect(ArrayHelper.move(arr, 1, 2)).toEqual([1, 3, 2]);
    }
  );
});
