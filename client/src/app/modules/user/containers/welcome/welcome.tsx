/**
 * @author Abhijit Baldawa
 */

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import cat from "../../../../../assets/images/cat.png";
import { getUserDeliveryDetails } from "../../../../shared/services/user/api/communication/communication";
import styles from "./welcome.module.css";
import { Loading } from "../../../../shared/components/app-components/loading/loading";
import { useCallApi } from "../../../../shared/hooks/use-call.api";
import { UserDeliveryDetails } from "../../components/delivery-details/user-delivery-details";

const Welcome: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const {
    loading,
    error,
    data: deliveryDetails,
    callApi: fetchUserDeliveryDetails,
  } = useCallApi(getUserDeliveryDetails);

  useEffect(() => {
    if (userId) {
      fetchUserDeliveryDetails(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  /**
   * NOTE: Only using alert for convenience
   */
  useEffect(() => {
    if (error) {
      alert(`Error fetching next delivery details. ${error}`);
    }
  }, [error]);

  return (
    <main className={styles.container}>
      {loading ? (
        <Loading message="Loading delivery details" />
      ) : deliveryDetails ? (
        <UserDeliveryDetails
          catImageUrl={cat}
          deliveryDetails={deliveryDetails}
        />
      ) : null}
    </main>
  );
};

export { Welcome };
