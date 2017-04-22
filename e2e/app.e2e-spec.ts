import { NgNewPage } from './app.po';

describe('ng-new App', () => {
  let page: NgNewPage;

  beforeEach(() => {
    page = new NgNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
