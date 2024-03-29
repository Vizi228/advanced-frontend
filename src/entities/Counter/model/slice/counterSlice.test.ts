import { counterActions, counterReducer, CounterSchema } from './counterSlice';

describe('CounterSliceTest', () => {
  let state: DeepPartial<CounterSchema>;

  beforeAll(() => {
    state = {
      value: 10,
    };
  });

  test('increment', () => {
    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual(
      { value: 11 },
    );
  });

  test('decrement', () => {
    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual(
      { value: 9 },
    );
  });
});
