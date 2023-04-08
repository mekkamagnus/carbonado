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

  it('should correctly tokenize a single digit', () => {
    const input = '8';
    const result = [{ type: 'Number', value: 8 }];
    expect(tokenize(input)).toEqual(result);
  });

  it('should be able to handle single numbers in expression', () => {
    const input = '(1 2)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Number', value: 1 },
      { type: 'Number', value: 2 },
      { type: 'Parenthesis', value: ')' },
    ];
    expect(tokenize(input)).toEqual(result);
  });

  it('should be able to handle single letters in expression', () => {
    const input = '(a b)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'a' },
      { type: 'Name', value: 'b' },
      { type: 'Parenthesis', value: ')' },
    ];
    expect(tokenize(input)).toEqual(result);
  });

  it('should be able to handle multiple-digit in expressions', () => {
    const input = '(11 99)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Number', value: 11 },
      { type: 'Number', value: 99 },
      { type: 'Parenthesis', value: ')' },
    ];
    expect(tokenize(input)).toEqual(result);
  });

  it('should correctly tokenize a simple expression', () => {
    const input = '(add 2 3)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'add' },
      { type: 'Number', value: 2 },
      { type: 'Number', value: 3 },
      { type: 'Parenthesis', value: ')' },
    ];
    expect(tokenize(input)).toEqual(result);
  });
  // Multiple letters
  it('should be able to handle strings in expressions', () => {
    const input = '(some words)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'some' },
      { type: 'Name', value: 'words' },
      { type: 'Parenthesis', value: ')' },
    ];
    expect(tokenize(input)).toEqual(result);
  });

  it('should ignore whitespace', () => {
    const input = '   (add    2 3)';
    const result = [
      { type: 'Parenthesis', value: '(' },
      { type: 'Name', value: 'add' },
      { type: 'Number', value: 2 },
      { type: 'Number', value: 3 },
      { type: 'Parenthesis', value: ')' },
    ];
    expect(tokenize(input)).toEqual(result);
  });
});
