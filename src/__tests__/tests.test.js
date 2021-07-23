import { should, expect } from 'chai';
import { describe, it } from 'mocha';

describe('Array', () => {
  it('#indexOf()', () => {
    should('should return -1 when the value is not present', () => {
      expect(-1).equals(-1);
    });
  });
});
