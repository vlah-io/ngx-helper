export class BrowserHelper {
  // https://stackoverflow.com/questions/17527713/force-browser-to-download-image-files-on-click
  static saveAs(filePath: string, forceDownloadAndSetName?: string | undefined): void {
    const c = (new Date()).getTime();
    const d: any = {};
    d[c] = document.createElement('a');
    d[c].href = filePath;
    d[c].target = '_blank';
    if (forceDownloadAndSetName) {
      (d[c] as HTMLAnchorElement).download = forceDownloadAndSetName;
    }
    document.body.appendChild(d[c]);
    (d[c] as HTMLAnchorElement).click();
    document.body.removeChild(d[c]);
  }

  static openFile(filePath: string): void {
    return BrowserHelper.saveAs(filePath);
  }
}
