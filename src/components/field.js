export const Field = ({type, price, quantity, setQuantity}) => {
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className='field'>
            <div className='field-title'>{type} Tickets</div>
            <div className='field-content'>
                <div className='price'>£{price}.00</div>
                <input id={type} type='number' step={1} onChange={handleQuantityChange} min={0} max={20} value={quantity}></input>
            </div>
        </div>
    );
}