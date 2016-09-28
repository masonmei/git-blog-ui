import { GitBlogUiPage } from './app.po';

describe('git-blog-ui App', function() {
  let page: GitBlogUiPage;

  beforeEach(() => {
    page = new GitBlogUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
