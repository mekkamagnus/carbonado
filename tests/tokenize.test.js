const { tokenize } = require('../tokenize');

describe(tokenize, () => {
  it('should return an array', () => {
    expect(Array.isArray(tokenize(''))).toBe(true);
  });

  it('should be able to tokenize a pair of parentheses', () => {
    const input = '()';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Parenthesis', value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it('should ignore whitespace completely', () => {
    const input = '        ';
    const result = [];
    expect(tokenize(input)).toEqual(result);
  });
});
