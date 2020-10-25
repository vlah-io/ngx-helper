export class ObjectHelper {
  /**
   * https://plainjs.com/javascript/utilities/merge-two-javascript-objects-19/
   */
  static merge(obj1: any, obj2: any): any {
    Object.keys(obj2).forEach((key) => {
      obj1[key] = obj2[key];
    });

    return obj1;
  }

  /**
   * http://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
   */
  static read(obj: any, path: string): any {
    const lambdaNotSupported = path.split('.').reduce(
      (o: any, i: string): any => o[i], obj
    );

    return lambdaNotSupported;
  }

  /**
   * Ex. readMultiIndex(obj, ['key1', 'key2', 'key3']) -> ((obj['key1'])['key2'])['key3']
   */
  static readMultiIndex(obj: any, arr: any[]): any {
    return arr.length ? ObjectHelper.readMultiIndex(obj[arr[0]], arr.slice(1)) : obj;
  }

  /**
   * Ex. readPathIndex(obj, '1.2.3') -> readMultiIndex(obj, ['1', '2', '3'])
   */
  static readPathIndex(obj: any, str: string): any {
    return ObjectHelper.readMultiIndex(obj, str.split('.'));
  }

  /**
   * el Ex. Array | Object | String | Date | RegExp | Function | Boolean | Number | Null | Undefined
   */
  static isTypeOff(el: any, type: string): any {
    const types = [
      'Array',
      'Object',
      'String',
      'Date',
      'RegExp',
      'Function',
      'Boolean',
      'Number',
      'Null',
      'Undefined'
    ];

    if (types.indexOf(type) === -1) {
      throw new Error('Expecting one of the following types: ' + types.join('|'));
    }

    // return Object.prototype.toString.call(el).slice(8, -1) === type;
    return Object.prototype.toString.call(el) === `[object ${type}]`;
  }
}
