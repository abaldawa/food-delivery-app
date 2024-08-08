/**
 * @author Abhijit Baldawa
 */

import type users from './mock-data/data.json';

type UserDetails = (typeof users)[number];
type CatDetails = UserDetails['cats'][number];

type Currency = 'GBP';

type PouchSize = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
type PouchSizeToPrice = Readonly<Record<PouchSize, number>>;
type CurrencyToPouchSizePrice = Readonly<Record<Currency, PouchSizeToPrice>>;

interface Cat extends Omit<CatDetails, 'pouchSize'> {
  pouchSize: PouchSize;
}

interface User extends Omit<UserDetails, 'cats'> {
  cats: Cat[];
}

const currencyToPouchSizePrice: CurrencyToPouchSizePrice = Object.freeze({
  GBP: Object.freeze({
    A: 55.5,
    B: 59.5,
    C: 62.75,
    D: 66,
    E: 69,
    F: 71.25,
  }),
});

export { User, PouchSize, Currency, currencyToPouchSizePrice };
