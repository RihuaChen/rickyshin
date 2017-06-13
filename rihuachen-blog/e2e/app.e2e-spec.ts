import { RihuachenBlogPage } from './app.po';

describe('rihuachen-blog App', () => {
  let page: RihuachenBlogPage;

  beforeEach(() => {
    page = new RihuachenBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
