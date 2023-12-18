import { Link } from "react-router-dom";
import { CartIcon, UserIcon } from "../Icons/icons";
import { useMiniHeaderStyles } from "./navbar.style";

export default function MiniHeader() {
  const {
    classes: { miniHeader, icon, text },
    cx,
  } = useMiniHeaderStyles();
  return (
    <div className={miniHeader}>
      <div className={text}>
        Use code FIRST50 for a 50% discount on your first order!
      </div>
      <div className={icon}>
        <div>
          <Link to={"/cart"} style={{ textDecoration: "none", color: "white" }}>
            <CartIcon />
          </Link>
        </div>
        <div>
          <Link to={"/test"} style={{ textDecoration: "none", color: "white" }}>
          <UserIcon />
          </Link>
          
        </div>
      </div>
    </div>
  );
}
