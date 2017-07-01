import { Airship.EarthPage } from './app.po';

describe('airship.earth App', () => {
  let page: Airship.EarthPage;

  beforeEach(() => {
    page = new Airship.EarthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
