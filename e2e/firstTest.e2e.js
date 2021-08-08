describe('Meus primeiros testes', () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });


});
