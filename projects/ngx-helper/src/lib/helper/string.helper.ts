export class StringHelper {
  /**
   * someRandomString becomes some Random String
   */
  static splitAtCapitalLetters(str: string): string {
    str = str.split(/(?=[A-Z])/)
      .join(' ');

    return str;
  }

  /**
   * someRandomString becomes Some Random String
   */
  static splitUcWords(str: string): string {
    str = str.split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase()
      .replace(/\b[a-z]/g,
        (letter) => letter.toUpperCase()
      );

    return str;
  }

  static getRandomNumber(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  /**
   * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
   */
  static isEmail(str: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
  }

  static cssClassNameToArray(cssClassName: string | string[], masterCssClassName?: string | string[]): string[] {
    if (Object.prototype.toString.call(cssClassName) === '[object String]') {
      cssClassName = (cssClassName as string).trim().split(' ');
    }

    if (Object.prototype.toString.call(cssClassName) !== '[object Array]') {
      cssClassName = [];
    }

    return [
      ...(masterCssClassName ? StringHelper.cssClassNameToArray(masterCssClassName) : []),
      ...(cssClassName as string[])
    ]
      .map((str) => str.trim())
      .filter((str) => str.length > 0);
  }
}
