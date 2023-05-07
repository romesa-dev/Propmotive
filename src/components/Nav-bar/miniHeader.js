import './miniHeader.css';
import {CartIcon} from "../logos/logo"

export default function MiniHeader() {
    return (<>
        <div className="mini-header">
            <div className="text">Use code FIRST50 for a 50% discount on your first order!</div>
            <div className="cart-logo">
                <CartIcon/>
            </div>
        </div>

    </>)
}