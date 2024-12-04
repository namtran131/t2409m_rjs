
export default function Product(){
    const price = 20;
    return (
        <div className="product">
            <h2>Ten san pham</h2>
            <p>Gia: {price}$</p>
            <p>Mo ta ngan</p>
            <button type="button">Add to cart</button>
        </div>
    );
}