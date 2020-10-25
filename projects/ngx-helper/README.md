@vlah.io/ngx-helper

Angular helper classes.

### Usage

#### Array Helper
```
  ArrayHelper.move(arr: any[], oldIndex: number, newIndex: number): any[]
  ArrayHelper.move([1, 2, 3], 1, 2) -> [1, 3, 2]
```

#### Browser Helper
```
  BrowserHelper.saveAs(filePath: string, forceDownloadAndSetName: string = null): void
```

#### Event Helper
```
  Event.dispatchKeyboardEvent(el: HTMLElement | Document | Window, event: 'keyup' | 'keydown' | 'keypress', key: string): void
```

#### Form Helper
```
  // Expects the form to have set the `password` and the `passwordConfirmation` input fields
  FormHelper.passwordMatchValidator(control: AbstractControl): void
```

#### Math Helper
```
  MathHelper.isNumber(n: any): number | false
  MathHelper.isNumber('1,000.22') -> true

  MathHelper.isNaN(n: any): boolean
  MathHelper.isNaN(100) -> false
```

#### Object Helper
```
  ObjectHelper.merge(obj1: any, obj2: any): any
  ObjectHelper.merge({a: 1}, {b: 2}) -> {a: 1, b: 2}

  ObjectHelper.read(obj: any, path: string): any
  ObjectHelper.read({a: b: { 2}}, 'a.b') -> 2

  ObjectHelper.readMultiIndex(obj: any, arr: any[]): any
  ObjectHelper.readMultiIndex({a: b: { 2}}, ['a', 'b']) -> 2

  ObjectHelper.readPathIndex(obj: any, str: string): any
  ObjectHelper.readPathIndex({a: b: { 2}}, 'a.b') -> 2

  // Array | Object | String | Date | RegExp | Function | Boolean | Number | Null | Undefined
  ObjectHelper.isTypeOff(el: any, type: string): any
  ObjectHelper.isTypeOff([], 'Array') -> true
```

#### String Helper
```
  StringHelper.splitAtCapitalLetters(str: string): string
  StringHelper.splitAtCapitalLetters('someRandomText') -> 'some Random Text'

  StringHelper.splitUcWords(str: string): string
  StringHelper.splitUcWords('someRandomText') -> 'Some Random Text'

  StringHelper.getRandomNumber(low: number, high: number): number

  StringHelper.isEmail(str: string): boolean
  StringHelper.isEmail('email@example.com') -> true
```

#### Date Helper
```
  // Ex. 2017-06-14T00:00:00+00:00
  DateHelper.toUTCAtomDate(date: Date): string

  // Ex. 2017-06-14T00:00:00+00:00
  DateHelper.toLocalAtomDate(date: Date): string

  // Ex. 2017-06-14T00:00:00-05:00
  DateHelper.toLocalAtomDateWithLocalTimezone(date: Date): string

  // Ex. 2017-06-14T00:00:00-05:00
  DateHelper.toLocalAtomDateWLT(date: Date): string

  // Ex. 2017-02-21T02:17:20+00:00
  DateHelper.toUTCAtomDateTime(date: Date): string

  // Ex. 2017-02-21T02:17:20+00:00
  DateHelper.toLocalAtomDateTime(date: Date): string

  // Ex. 2017-02-21T02:17:20+01:00
  DateHelper.toLocalAtomDateTimeWithLocalTimezone(date: Date): string

  // Ex. 2017-06-14
  DateHelper.getUTCDate(date: Date): string

  // Ex. 2017-06-14
  DateHelper.getLocalDate(date: Date): string

  // Ex. 08:24:36
  DateHelper.getUTCTime(date: Date): string

  // Ex. 08:24:36
  DateHelper.getLocalTime(date: Date): string

  DateHelper.formatUTC(str: string, format: string): string
  DateHelper.formatLocal(str: string, format: string): string
  DateHelper.formatDateUTC(date: Date, format: string): string
  DateHelper.formatDateLocal(date: Date, format: string): string
  DateHelper. parseFormat(year: number, month: number, date: number, hours: number, minutes: number, seconds: number, format: string): string


  DateHelper.pad(n: number): string
  DateHelper.pad(1) -> 01
  DateHelper.pad(10) -> 10

  DateHelper.offset(n: number): string
  DateHelper.offset(-120) -> 2
  DateHelper.offset(120) -> -2
```

For more details read [here](https://github.com/vlah-io/ngx-helper/blob/master/INSTALLATION.md).
