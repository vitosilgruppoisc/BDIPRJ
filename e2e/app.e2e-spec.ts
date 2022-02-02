import { LokiUIPage } from './app.po';

describe('loki-ui App', function() {
  let page: LokiUIPage;

  beforeEach(() => {
    page = new LokiUIPage();
  });

  it('should display footer containing lokiUI', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('lokiUI');
  });
});
