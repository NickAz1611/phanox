import toast from "react-hot-toast";

const { createContext, useState, useContext } = require("react");

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantites] = useState(0);
  const [quantity, setQuantity] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalQuantites((prevQuantity) => prevQuantity + quantity);
    setTotalPrice((prevPrice) => prevPrice + product.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${quantity} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    let newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );

    setTotalQuantites(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    if (value === "inc") {
      let newCartItems = cartItems.filter((item) => item._id !== id);

      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);

      setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + 1);
      foundProduct.quantity = foundProduct.quantity + 1;
    }
    if (value === "dec") {
      if (foundProduct.quantity > 1) {
        let newCartItems = cartItems.filter((item) => item._id !== id);

        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);

        setTotalQuantites((prevTotalQuantities) => prevTotalQuantities - 1);
        foundProduct.quantity = foundProduct.quantity - 1;
      }
    }
  };

  const incQnty = () => {
    setQuantity((prevQnty) => prevQnty + 1);
  };

  const decQnty = () => {
    setQuantity((prevQnty) => {
      if (prevQnty < 2) {
        return 1;
      }

      return prevQnty - 1;
    });
  };

  return (
    <div>
      <Context.Provider
        value={{
          showCart,
          setShowCart,
          setCartItems,
          setTotalPrice,
          setTotalQuantites,
          cartItems,
          totalPrice,
          totalQuantities,
          quantity,
          incQnty,
          decQnty,
          onAdd,
          toggleCartItemQuantity,
          onRemove,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export const useStateContext = () => useContext(Context);
