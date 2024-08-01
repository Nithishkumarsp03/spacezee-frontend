import React from "react";
import styles from "./TaskDetails.module.css";

const TaskDetails = () => {
  return (
    <div>
      <h2>EMI_003AC</h2>
      <div className={styles.details}>
        <p>
          Michael acquired a loan amounting to ₹3,50,000 to purchase plant and
          machinery for his business. Currently, he is repaying a monthly EMI of
          ₹4,250 with a straight-line interest rate of 6% (Option 1). He
          requires clarity on the details of his current interest plan and also
          wishes to explore the option of a diminishing interest rate of 9%
          (Option 2).
        </p>
        <p>You are required to compute the following:</p>
        <ul>
          <li>
            Duration of the EMI tenure (month) if the interest rate follows the
            straight line method.
          </li>
          <li>
            Duration of the EMI tenure (month) if the interest rate follows the
            diminishing method.
          </li>
          <li>The total interest amount using the straight line method.</li>
          <li>The total interest amount using the diminishing method.</li>
          <li>
            Determine which method is more advantageous: diminishing method or
            straight line method?
          </li>
        </ul>
        <p>
          माइकल ने अपने व्यवसाय के लिए संयंत्र और मशीनरी खरीदने के लिए ₹3,50,000
          का ऋण लिया। वर्तमान में, वह 6% की सीधी ब्याज दर (विकल्प 1) के साथ
          ₹4,250 की मासिक ईएमआई चुका रहे है। उन्हें अपनी वर्तमान ब्याज योजना के
          विवरण पर स्पष्टता की आवश्यकता है और वह 9% की घटती ब्याज दर का विकल्प
          भी तलाशना चाहते है (विकल्प 2)।
        </p>
        <ul>
          <li>
            ईएमआई अवधि की कार्यकाल (महीना) यदि ब्याज दर सीधी रेखा पद्धति का पालन
            करती है।
          </li>
          <li>
            ईएमआई अवधि की कार्यकाल (महीना) यदि ब्याज दर ह्रासमान पद्धति का
            अनुसरण करती है।
          </li>
          <li>सीधी रेखा पद्धति का उपयोग करके कुल ब्याज राशि।</li>
          <li>ह्रासमान पद्धति का उपयोग करके कुल ब्याज राशि।</li>
          <li>
            निर्धारित करें कि कौन सी पद्धति अधिक लाभप्रद है, ह्रास पद्धति या
            सीधी रेखा पद्धति?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskDetails;
