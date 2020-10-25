export class EventHelper {
  static dispatchKeyboardEvent(
    el: HTMLElement | Document | Window,
    event: 'keyup' | 'keydown' | 'keypress',
    key: string
  ): void {
    el.dispatchEvent(new KeyboardEvent(event, {key}));
  }
}
