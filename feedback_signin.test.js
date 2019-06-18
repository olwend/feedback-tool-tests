jest.setTimeout(5000);

describe('top level sign in page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/login/sign-in');
  });

  it('should be titled "Feedbacks"', async () => {
    await expect(page.title()).resolves.toMatch('Feedbacks');
    await page.screenshot({path: './images/sign.png'});
  });

  it('should Sign up a new user Test Alpha', async () => {
    await page.type('#root > div > div > div > div > div.Login__Form.col-md-6 > div.row.container-fluid.justify-content-center.m-auto > div > form > div:nth-child(2) > input','Test Alpha');
    // await page.type('input[name=name]','Test Alpha');
    await page.type('input[name=email]','test.alpha@ecs-digital.co.uk');
    await page.type('input[name=password]','password');
    await page.type('input.FormField__Input','password');
    await page.click('input.FormField__Checkbox');
    await page.click('[data-cy=loginBtn]');
    let url = await page.url();
    console.log('Test Alpha is now on ' + url);
    expect(url).toMatch('http://localhost:3000/login/sign-in');
  });

  it('should Sign up a new user Test Beta', async () => {
    await page.type('#root > div > div > div > div > div.Login__Form.col-md-6 > div.row.container-fluid.justify-content-center.m-auto > div > form > div:nth-child(2) > input','Test Beta');
    // await page.type('input[name=name]','Test Alpha');
    await page.type('input[name=email]','test.beta@ecs-digital.co.uk');
    await page.type('input[name=password]','password');
    await page.type('input.FormField__Input','password');
    await page.click('input.FormField__Checkbox');
    await page.click('[data-cy=loginBtn]');
    let url = await page.url();
    console.log('Test Beta is now on ' + url);
    expect(url).toMatch('http://localhost:3000/login/sign-in');
  });

  it('should Sign up a new user Test Beta', async () => {
    await page.type('#root > div > div > div > div > div.Login__Form.col-md-6 > div.row.container-fluid.justify-content-center.m-auto > div > form > div:nth-child(2) > input','Test Beta');
    // await page.type('input[name=name]','Test Alpha');
    await page.type('input[name=email]','test.beta@ecs-digital.co.uk');
    await page.type('input[name=password]','password');
    await page.type('input.FormField__Input','password');
    await page.click('input.FormField__Checkbox');
    await page.click('[data-cy=loginBtn]');
    let url = await page.url();
    console.log('Test Beta is now on ' + url);
    expect(url).toMatch('http://localhost:3000/login/sign-in');
  });

  it('should Sign up a new user Test Gamma', async () => {
    await page.type('#root > div > div > div > div > div.Login__Form.col-md-6 > div.row.container-fluid.justify-content-center.m-auto > div > form > div:nth-child(2) > input','Test Beta');
    // await page.type('input[name=name]','Test Alpha');
    await page.type('input[name=email]','test.gamma@ecs-digital.co.uk');
    await page.type('input[name=password]','password');
    await page.type('input.FormField__Input','password');
    await page.click('input.FormField__Checkbox');
    await page.click('[data-cy=loginBtn]');
    let url = await page.url();
    console.log('Test Gamma is now on ' + url);
    expect(url).toMatch('http://localhost:3000/login/sign-in');
  });

  // Test manager
  // Sign ins


});
