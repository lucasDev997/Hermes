import { AbreviateNumberPipe } from './abreviate-number.pipe';

describe('AbreviateNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new AbreviateNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
