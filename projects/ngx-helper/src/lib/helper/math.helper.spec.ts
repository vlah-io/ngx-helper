import {MathHelper} from './math.helper';

describe('MathHelper', () => {
  it(
    'should return 1',
    () => {
      expect(MathHelper.isNumber(1)).toBe(1);
    }
  );

  it(
    'should return 1',
    () => {
      expect(MathHelper.isNumber('1')).toBe(1);
    }
  );

  it(
    'should return true',
    () => {
      expect(MathHelper.isNaN('1,00.3')).toBeTrue();
    }
  );

  it(
    'should return false',
    () => {
      expect(MathHelper.isNaN('100.3')).toBeFalse();
    }
  );
});
