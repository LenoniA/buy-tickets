export const Field = ({type, price, setQuantity}) => {
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div className='field'>
            <div className='field-title'>{type} Tickets</div>
            <div className='field-content'>
                <div className='price'>£{price}.00</div>
                <input id={type} type='number' step={1} defaultValue={0} onChange={handleQuantityChange} min={0} max={20}></input>
            </div>
        </div>
    );
}