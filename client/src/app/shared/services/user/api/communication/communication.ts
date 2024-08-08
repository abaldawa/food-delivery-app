import axios from "axios";
import { z } from "zod";

const DeliveryDetailsSchema = z
  .object({
    title: z.string().min(1),
    message: z.string().min(1),
    totalPrice: z.number().nonnegative(),
    freeGift: z.boolean(),
    /**
     * Currently we only have "GBP" but
     * in the future we may have more currencies so
     * we may need to do union of values
     */
    currency: z.literal("GBP"),
  })
  .strict();

type DeliveryDetails = z.infer<typeof DeliveryDetailsSchema>;

const getUserDeliveryDetails = async (
  userId: string
): Promise<DeliveryDetails> => {
  const { data: deliveryDetails } = await axios.get<DeliveryDetails>(
    `/comms/your-next-delivery/${userId}`
  );

  await DeliveryDetailsSchema.parseAsync(deliveryDetails);

  return deliveryDetails;
};

export type { DeliveryDetails };
export { getUserDeliveryDetails };
