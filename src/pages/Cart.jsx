import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex-col">


      <div className=" w-full">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" sm:pl-[100px] flex flex-col w-full justify-center pl-[80px] h-screen">

        <div>
          <div className="md:text-2xl text-xl uppercase font-bold text-green-700">Your Cart</div>
          <div className="md:text-5xl text-3xl uppercase font-bold text-green-700">Summary</div>
          <p className="mt-4">
            <span 
            className="font-bold text-xl"
            >Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="mt-2">
          <p className="font-bold text-xl">Total Amount: ${totalAmount}</p>
          <button
          className="mt-8 bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-900 rounded"
          >
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col h-screen justify-center items-center ">
      <h1
      className="text-3xl font-bold"
      >Cart Empty :)</h1>
      <Link to={"/"}>
        <button
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
        >
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
