// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:8383/project/index.html');

    expect(browser.getTitle()).toEqual('Angular Practice');
    expect(element(by.id('num1_calc2')).element(by.model('num1')).getAttribute('value')).toEqual('1');

  });
});