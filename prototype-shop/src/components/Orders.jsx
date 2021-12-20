import { useMemo } from 'react';
import useActions from '../Hooks/useActions';
import useOrders from '../Hooks/useOrders';
import usePrototypes from '../Hooks/usePrototypes';
export default function Orders() {
    const orders = useOrders();
    console.log(orders);

    const prototypes = usePrototypes();
    const { remove, removeAll } = useActions();
    const totalPrice = useMemo(() => {
        return orders.map((order) => {
            const { id, quantity } = order;
            const prototype = prototypes.find((p) => p.id === id);
            return prototype.price * quantity;
        })
            .reduce((l, r) => l + r, 0);
    }, [orders, prototypes]);
    if (orders.length === 0) {
        return (
            <aside>
                <div className="empty">
                    <div className="title">추가된 내역이 없습니다. </div>
                    <div className="subtitle">주문을 추가하려면 + 클릭</div>
                </div>
            </aside>
        );
    }
    return (
        <aside>
            <div className="order">
                <div className="body">
                    {orders.map((order) => {
                        const { id } = order;
                        const prototype = prototypes.find((p) => p.id === id);
                        const click = () => {
                            remove(id);
                        };
                        return (
                            <div className="item" key={id}>
                                <div className="img">
                                    <video src={prototype.thumbnail} />
                                </div>
                                <div className="content">
                                    <p className="title">
                                        {prototype.title} x {order.quantity}
                                    </p>
                                </div>
                                <div className="action">
                                    <p className="price">$ {prototype.price * order.quantity}</p>
                                    <button className="btn btn--link" onClick={click}>
                                        <i className="icon icon--cross" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="total">
                    <hr />
                    <div className="item">
                        <div className="content">Total</div>
                        <div className="action">
                            <div className="price">$ {totalPrice}</div>
                        </div>
                        <button className="btn btn--link" onClick={removeAll} style={{display: 'block'}}>
                            <i className="icon icon--delete" style={{display: 'block'}}></i>
                        </button><br></br>
                        <button className="btn btn--secondary" style={{ width: '100%', marginTop: 10, display: 'block' }}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
