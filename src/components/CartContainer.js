import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, REFILL_CART, GET_TOTALS } from "../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
	useEffect(
		() => {
			dispatch({ type: GET_TOTALS });
		},
		[ cart, dispatch ]
	);
	if (cart.length === 0) {
		return (
			<section className="cart">
				<header>
					<h3 className="empty-cart">your cart is empty</h3>
				</header>
				<button className="btn clear-btn display-block" onClick={() => dispatch({ type: REFILL_CART })}>
					refill cart
				</button>
			</section>
		);
	}
	return (
		<section className="cart">
			<article>
				{cart.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</article>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>{total}€</span>
					</h4>
				</div>
				<button className="btn clear-btn" onClick={() => dispatch({ type: CLEAR_CART })}>
					clear cart
				</button>
				<button className="btn clear-btn" onClick={() => dispatch({ type: REFILL_CART })}>
					refill cart
				</button>
			</footer>
		</section>
	);
};

function mapStateToProps(store) {
	const { cart, total } = store;
	return { cart, total };
}
export default connect(mapStateToProps)(CartContainer);
