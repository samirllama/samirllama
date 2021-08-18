import { BaseCta } from "./BaseCta";
import "../styles.css";

export const DisabledCta = () => {
  return (
    <BaseCta className="btn-disabled" tag="Link">
      This is a link
      <i>i</i>
    </BaseCta>
  );
};

