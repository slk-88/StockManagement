import { StockManagerPage } from './app.po';

describe('stock-manager App', () => {
  let page: StockManagerPage;

  beforeEach(() => {
    page = new StockManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
