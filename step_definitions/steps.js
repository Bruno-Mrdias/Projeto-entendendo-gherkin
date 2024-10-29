const { I } = inject();
// Add in your custom step files


Given('I am on the login screen', () => {
  // From "features\basic.feature" {"line":7,"column":5}
  I.amOnPage('/')
  I.click('Login')
  I.waitForElement('#user', 5)
});

When('I fill the user email field', () => {
  // From "features\basic.feature" {"line":8,"column":5}
  I.fillField('#user', 'joao1212@gmail.com')
});

When('I fill the user password field', () => {
  // From "features\basic.feature" {"line":9,"column":5}
  I.fillField('#password', secret('123456'))
});

When('I click on Login button', () => {
  // From "features\basic.feature" {"line":10,"column":5}
  I.click('#btnLogin')
});

Then('I am logged into the website for buy', () => {
  // From "features\basic.feature" {"line":11,"column":5}
  I.see('Login realizado', 'h2')
});
