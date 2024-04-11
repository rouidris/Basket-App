import "./style.scss"

const CartHeader = () => {
    return (
		<header className='cart-header'>
			<div className='cart-header__title'>наименование поля</div>
			<div className='cart-header__count'>гектары</div>
			<div className='cart-header__cost'>стоимость</div>
		</header>
	);
}

export default CartHeader;