/**
 * http://php.net/manual/en/class.datetime.php
 * See: const string ATOM = 'Y-m-d\TH:i:sP' ;
 * http://blog.skylight.io/bringing-sanity-to-javascript-utc-dates-with-moment-js-and-ember-data/
 * http://stackoverflow.com/questions/7556591/javascript-date-object-always-one-day-off
 * https://stackoverflow.com/questions/8947240/convert-json-timestamp-to-normal-date-and-time-in-javascript/8947570#8947570
 * https://stackoverflow.com/questions/19968216/cannot-get-my-date-of-dd-mm-yyyy-to-format-into-mm-dd-yyyy/19968257#19968257
 */
export class DateHelper {
  /**
   * This will return the user's local date converted to UTC.
   * To be safe, always create a Date object by passing only a year, month, date
   * (never offset, hours, minutes, seconds)
   *
   * (string} Ex. 2017-06-14T00:00:00+00:00
   */
  static toUTCAtomDate(date: Date): string {
    return DateHelper.getUTCDate(date) + 'T00:00:00+00:00';
  }

  /**
   * This will return the user's local date.
   * To be safe, always create a Date object by passing only a year, month, date
   * (never offset, hours, minutes, seconds)
   * What you see is what you get (offset excluded)
   *
   * THE OUTPUT IS SAFE TO USE FOR CREATING DATE OBJECTS INDEPENDENT OF THE USERS LOCAL TIME
   *
   * {string} Ex. 2017-06-14T00:00:00+00:00
   */
  static toLocalAtomDate(date: Date): string {
    return DateHelper.getLocalDate(date) + 'T00:00:00+00:00';
  }

  /**
   * This will return the user's local date.
   * What you see is what you get (offset included)
   *
   * {string} Ex. 2017-06-14T00:00:00-05:00
   */
  static toLocalAtomDateWithLocalTimezone(date: Date): string {
    return DateHelper.getLocalDate(date) + 'T00:00:00' + DateHelper.offset(date.getTimezoneOffset()) + ':00';
  }

  /**
   * {string} Ex. 2017-06-14T00:00:00-05:00
   */
  static toLocalAtomDateWLT(date: Date): string {
    return DateHelper.toLocalAtomDateWithLocalTimezone(date);
  }

  /**
   * This will return the user's local date converted to UTC.
   * To be safe, always create a Date object by passing only a year, month, date, hours, minutes, seconds
   * (never offset)
   *
   * {string} Ex. 2017-02-21T02:17:20+00:00
   */
  static toUTCAtomDateTime(date: Date): string {
    return DateHelper.getUTCDate(date) + 'T' + DateHelper.getUTCTime(date) + '+00:00';
  }

  /**
   * This will return the user's local date time.
   * To be safe, always create a Date object by passing only a year, month, date, hours, minutes, seconds
   * (never offset)
   * What you see is what you get (offset excluded)
   *
   * {string} Ex. 2017-02-21T02:17:20+00:00
   */
  static toLocalAtomDateTime(date: Date): string {
    return DateHelper.getLocalDate(date) + 'T' + DateHelper.getLocalTime(date) + '+00:00';
  }

  /**
   * This will return the user's local date time.
   * What you see is what you get (offset included)
   *
   * {string} Ex. 2017-02-21T02:17:20+01:00
   */
  static toLocalAtomDateTimeWithLocalTimezone(date: Date): string {
    return DateHelper.getLocalDate(date) + 'T' + DateHelper.getLocalTime(date) + DateHelper.offset(date.getTimezoneOffset()) + ':00';
  }

  /**
   * {string} Ex. 2017-06-14
   */
  static getUTCDate(date: Date): string {
    return DateHelper.formatDateUTC(date, 'yyyy-MM-dd');
  }

  /**
   * {string} Ex. 2017-06-14
   */
  static getLocalDate(date: Date): string {
    return DateHelper.formatDateLocal(date, 'yyyy-MM-dd');
  }

  /**
   * {string} Ex. 08:24:36
   */
  static getUTCTime(date: Date): string {
    return DateHelper.formatDateUTC(date, 'HH:mm:ss');
  }

  /**
   * {string} Ex. 08:24:36
   */
  static getLocalTime(date: Date): string {
    return DateHelper.formatDateLocal(date, 'HH:mm:ss');
  }

  /**
   * {string}
   */
  static formatUTC(str: string, format: string): string {
    return DateHelper.formatDateUTC(new Date(str), format);
  }

  /**
   * {string}
   */
  static formatLocal(str: string, format: string): string {
    return DateHelper.formatDateLocal(new Date(str), format);
  }

  /**
   * {string}
   */
  static formatDateUTC(date: Date, format: string): string {
    return DateHelper.parseFormat(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      format
    );
  }

  /**
   * {string}
   */
  static formatDateLocal(date: Date, format: string): string {
    return DateHelper.parseFormat(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      format
    );
  }

  /**
   * {string}
   */
  static parseFormat(year: number,
                     month: number,
                     date: number,
                     hours: number,
                     minutes: number,
                     seconds: number,
                     format: string): string {
    month = month + 1;

    format = format.replace('MM', DateHelper.pad(month));
    format = format.replace('dd', DateHelper.pad(date));

    if (format.indexOf('yyyy') > -1) {
      format = format.replace('yyyy', year.toString());
    } else if (format.indexOf('yy') > -1) {
      format = format.replace('yy', year.toString().substr(2, 2));
    }

    if (format.indexOf('a') > -1) {
      if (hours > 11) {
        format = format.replace('a', 'PM');
      } else {
        format = format.replace('a', 'AM');
      }
    }

    if (format.indexOf('HH') > -1) {
      format = format.replace('HH', DateHelper.pad(hours));
    } else if (format.indexOf('hh') > -1) {
      if (hours > 12) {
        hours = hours - 12;
      } else if (hours === 0) {
        hours = 12;
      }
      format = format.replace('hh', DateHelper.pad(hours));
    }

    if (format.indexOf('mm') > -1) {
      format = format.replace('mm', DateHelper.pad(minutes));
    }

    if (format.indexOf('ss') > -1) {
      format = format.replace('ss', DateHelper.pad(seconds));
    }

    return format;
  }

  /**
   * {string}
   */
  static pad(n: number): string {
    return n < 10 ? '0' + (n).toString() : (n).toString();
  }

  /**
   * {string}
   */
  static offset(n: number): string {
    return (n <= 0 ? '+' + DateHelper.pad(n / -60) : '-' + DateHelper.pad(n / 60));
  }
}
