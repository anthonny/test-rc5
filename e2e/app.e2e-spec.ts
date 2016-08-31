import { TestRc5Page } from './app.po';

describe('test-rc5 App', function() {
  let page: TestRc5Page;

  beforeEach(() => {
    page = new TestRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
