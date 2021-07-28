import React from "react";
import { connect } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ amount }) => {
	return (
		<nav>
			<div className="nav-center">
				<h2>Redux Store</h2>
				<div className="nav-container">
					<AiOutlineShoppingCart size="70px" />
					<div className="amount-container">
						<p className="total-amount">{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return { amount: state.amount };
};
export default connect(mapStateToProps)(Navbar);
