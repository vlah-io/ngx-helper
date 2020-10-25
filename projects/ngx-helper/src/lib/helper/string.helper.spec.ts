import {StringHelper} from './string.helper';

describe('ObjectHelper', () => {
  it(
    'should return `some Random String`',
    () => {
      expect(StringHelper.splitAtCapitalLetters('someRandomString')).toBe('some Random String');
    }
  );

  it(
    'should return `Some Random String`',
    () => {
      expect(StringHelper.splitUcWords('someRandomString')).toBe('Some Random String');
    }
  );

  it(
    'should return true',
    () => {
      expect(StringHelper.isEmail('email@example.com')).toBeTrue();
    }
  );

  it(
    'should return ["a", "b", "c", "d"]',
    () => {
      expect(StringHelper.cssClassNameToArray('c d', ['a', 'b'])).toEqual(['a', 'b', 'c', 'd']);
    }
  );

  it(
    'should return ["a", "b", "c", "d"]',
    () => {
      expect(StringHelper.cssClassNameToArray(['c', 'd'], ['a', 'b'])).toEqual(['a', 'b', 'c', 'd']);
    }
  );

  it(
    'should return ["a", "b", "c", "d"]',
    () => {
      expect(StringHelper.cssClassNameToArray('c d', 'a b')).toEqual(['a', 'b', 'c', 'd']);
    }
  );

  it(
    'should return ["a", "b", "c", "d"]',
    () => {
      expect(StringHelper.cssClassNameToArray(['c', 'd'], 'a b')).toEqual(['a', 'b', 'c', 'd']);
    }
  );
});
