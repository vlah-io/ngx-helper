import {ObjectHelper} from './object.helper';

describe('ObjectHelper', () => {
  it(
    'should return {a: 1, b: 2}',
    () => {
      expect(ObjectHelper.merge({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
    }
  );

  it(
    'should return 2',
    () => {
      expect(ObjectHelper.read({a: {b: 2}}, 'a.b')).toBe(2);
    }
  );

  it(
    'should return 2',
    () => {
      expect(ObjectHelper.readMultiIndex({a: {b: 2}}, ['a', 'b'])).toBe(2);
    }
  );

  it(
    'should return 2',
    () => {
      expect(ObjectHelper.readPathIndex({a: {b: 2}}, 'a.b')).toBe(2);
    }
  );

  it(
    'should return true',
    () => {
      expect(ObjectHelper.isTypeOff({a: {b: 2}}, 'Object')).toBeTrue();
    }
  );
});
