import { MatchappPage } from './app.po';

describe('matchapp App', () => {
  let page: MatchappPage;

  beforeEach(() => {
    page = new MatchappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
