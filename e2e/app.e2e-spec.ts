import { ShowmethedealFrontendPage } from './app.po';

describe('showmethedeal-frontend App', () => {
  let page: ShowmethedealFrontendPage;

  beforeEach(() => {
    page = new ShowmethedealFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
