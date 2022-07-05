/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
  });
});
describe('Page View', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 3 paragraphs', () => {
    const view = new View();
    view.addParagraph()
    expect(document.querySelectorAll('p').length).toBe(3);
  });
});