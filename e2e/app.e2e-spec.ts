import { EufCliToolHelperPage } from './app.po';

describe('euf-cli-tool-helper App', function() {
  let page: EufCliToolHelperPage;

  beforeEach(() => {
    page = new EufCliToolHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
