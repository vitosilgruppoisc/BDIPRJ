import { browser, element, by } from 'protractor';

export class LokiUIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('app-footer')).getText();
  }
}
