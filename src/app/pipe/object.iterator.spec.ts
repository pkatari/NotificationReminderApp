import { ObjectIterable } from './objectiterator';

describe('Object Iterable', () => {
    let pipe: ObjectIterable;

    beforeEach(() => {
      pipe = new ObjectIterable();
    });
    it('It should iterate over object', () => {
        const obj = {'sun': 'S'};
        const resultArray = [{ key: 'sun', val: 'S'}];
        console.log(pipe.transform(obj));
        expect(pipe.transform(obj)).toEqual(resultArray);
      });
  });
