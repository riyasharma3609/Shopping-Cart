
// import {FcDeleteDatabase} from "react-icons/fc"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex border-b w-6/12 items-center justify-end ml-24 mt-16 mb-16">

        <div className="h-38 w-96 mb-6">
          <img src={item.image} />
        </div>
        <div className="ml-6">
          <h1 
          className="font-bold text-xl"
          >{item.title}</h1>
          <h1
          className="text-sm mt-4"
          >{item.description.substring(0,100)}....`</h1>
          <div className="flex  mt-5 justify-between mb-4">
            <p 
            className="text-lg font-bold text-green-600"
            >${item.price}</p>
            <div
            onClick={removeFromCart}
            className="hover:text-red-700 hover:text-xl"
            >
              <MdDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
