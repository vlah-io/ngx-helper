export class MathHelper {
  static isNumber(n: any): number | false {
    return isFinite(n) ? +n : false;
  }

  static isNaN(n: any): boolean {
    return !MathHelper.isNumber(n);
  }
}
