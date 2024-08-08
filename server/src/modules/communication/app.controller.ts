/**
 * @author Abhijit Baldawa
 */

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { formatGrammatically } from './utils';
import { Currency } from './types';

@Controller('comms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('your-next-delivery/:userId')
  getUserDeliveryDetails(@Param('userId') userId: string): {
    title: string;
    message: string;
    totalPrice: number;
    freeGift: boolean;
    currency: Currency;
  } {
    const { catNames, currency, firstName, freeGift, totalPrice } =
      this.appService.getUserDeliveryDetails(userId);

    const formattedCatNames = formatGrammatically(catNames);

    return {
      title: `Your next delivery for ${formattedCatNames}`,
      message: `Hey ${firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`,
      totalPrice,
      freeGift,
      currency,
    };
  }
}
