const sayHello = require('./problem');

describe('sayHello', () => {
  test("should return 'Hello, World!'", () => {
    expect(sayHello()).toBe('Hello, World!');
  });
});
