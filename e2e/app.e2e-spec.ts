import { ScavengerHuntPage } from './app.po';

describe('scavenger-hunt App', function() {
  let page: ScavengerHuntPage;

  beforeEach(() => {
    page = new ScavengerHuntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
