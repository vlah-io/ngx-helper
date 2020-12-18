import {ObjectHelper} from './object.helper';

export class ArrayHelper {
  // https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
  static move([...arr]: any[], oldIndex: number, newIndex: number): any[] {
    if (newIndex >= arr.length) {
      return arr;
    }

    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);

    return arr;
  }

  static deepCopy<T>(target: T): T {
    return ObjectHelper.deepCopy(target);
  }
}
