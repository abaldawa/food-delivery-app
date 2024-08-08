/**
 * @author Abhijit Baldawa
 */

import { Button } from "../../../../shared/components/ui/button/button";
import { DeliveryDetails } from "../../../../shared/services/user/api/communication/communication";
import styles from "./user-delivery-details.module.css";

interface UserDeliveryDetailsProps {
  catImageUrl: string;
  deliveryDetails: DeliveryDetails;
}

const UserDeliveryDetails: React.FC<UserDeliveryDetailsProps> = (props) => {
  const { deliveryDetails, catImageUrl } = props;

  return (
    <article className={styles["delivery-details-wrapper"]}>
      <div className={styles["delivery-details-container"]}>
        <img className={styles.image} src={catImageUrl} alt="cat image" />
        <div className={styles.description}>
          <h2 className={styles.title}>{deliveryDetails.title}</h2>
          <p className={styles.message}>{deliveryDetails.message}</p>
        </div>
        <div className={styles["total-price"]}>
          <span>Total price:</span>
          <span>
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: deliveryDetails.currency,
            }).format(deliveryDetails.totalPrice)}
          </span>
        </div>
        <div className={styles["action"]}>
          <Button variant="contained" className={styles["action-button"]}>
            SEE DETAILS
          </Button>
          <Button variant="outlined" className={styles["action-button"]}>
            EDIT DELIVERY
          </Button>
        </div>
        {deliveryDetails.freeGift && (
          <span className={styles["free-gift"]}>FREE GIFT</span>
        )}
      </div>
    </article>
  );
};

export { UserDeliveryDetails };
