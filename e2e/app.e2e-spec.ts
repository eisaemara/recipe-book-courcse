import { RecipesAppPage } from './app.po';

describe('recipes-app App', () => {
  let page: RecipesAppPage;

  beforeEach(() => {
    page = new RecipesAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
