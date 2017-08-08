import { WinfileshowPage } from './app.po';

describe('winfileshow App', () => {
  let page: WinfileshowPage;

  beforeEach(() => {
    page = new WinfileshowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
