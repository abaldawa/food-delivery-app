/**
 * @author Abhijit Baldawa
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import * as users from './mock-data/data.json';
import { Currency, currencyToPouchSizePrice, PouchSize, User } from './types';

@Injectable()
export class AppService {
  getUserDeliveryDetails(userId: string): {
    firstName: User['firstName'];
    catNames: User['cats'][number]['name'][];
    totalPrice: number;
    freeGift: boolean;
    currency: Currency;
  } {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      throw new NotFoundException(`User ID '${userId}' not found in the DB`);
    }

    const { catNames, totalPrice } = user.cats.reduce<{
      catNames: string[];
      totalPrice: number;
    }>(
      (catDeliveryDetails, catSubscription) => {
        if (catSubscription.subscriptionActive) {
          catDeliveryDetails.catNames.push(catSubscription.name);
          catDeliveryDetails.totalPrice +=
            currencyToPouchSizePrice.GBP[
              catSubscription.pouchSize as PouchSize
            ];
        }
        return catDeliveryDetails;
      },
      { catNames: [], totalPrice: 0 },
    );

    return {
      firstName: user.firstName,
      catNames,
      totalPrice,
      freeGift: totalPrice > 120,
      currency: 'GBP',
    };
  }
}
