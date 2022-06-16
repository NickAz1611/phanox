const { createContext, useState } = require("react");

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setcartItems] = useState();
  const [totalPrice, settotalPrice] = useState();
  const [totalQuantities, setTotalQuantites] = useState();
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Context.Provider
        value={(showCart, cartItems, totalPrice, totalQuantities, quantity)}
      >
        {children}
      </Context.Provider>
    </div>
  );
};
