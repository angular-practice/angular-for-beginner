import { AngularForBeginnerPage } from './app.po';

describe('angular-for-beginner App', () => {
  let page: AngularForBeginnerPage;

  beforeEach(() => {
    page = new AngularForBeginnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
