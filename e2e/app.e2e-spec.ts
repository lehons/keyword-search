import { KeywordsPage } from './app.po';

describe('keywords App', () => {
  let page: KeywordsPage;

  beforeEach(() => {
    page = new KeywordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
