// import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slice/cartSlice.ts";
import {ProductData} from "../../../model/ProductData.ts";
// import {CartItem} from "../../../model/CartItem.ts";

interface ModifyCartProps {
    data: ProductData
}

// export const  itemList: CartItem[] = [];

export function ModifyCart({ data }: ModifyCartProps) {

    const  dispatch = useDispatch<AppDispatch>();


    // const [itemCount, setItemCount] = useState(1);

   const item = useSelector(
       (state: RootState) => state.cart.items.find(cartItem => cartItem.product.id === data.id));

    // useEffect(() => {
    //     const existingItem = itemList.find(item => item.product.id === data.product.id);
    //
    //     if (existingItem){
    //         existingItem.itemCount = itemCount;
    //     } else {
    //         itemList.push({
    //             product: data.product,
    //             itemCount: itemCount
    //         });
    //     }
    //     console.log(itemList);
    //
    // },[itemCount, data])

    const decreaseItemCount =() => {
        // setItemCount(prevValue =>
        //    prevValue > 1
        //     ? prevValue - 1
        //        :(alert("Item count cant't" +
        //               "be less than 1"),
        //            prevValue
        //        )
        //
        // )
        if (item && item.itemCount > 1){
            // setItemCount( (prev) => prev - 1);
            dispatch(decreaseQuantity(data.id));
        } else  {
            alert("Item Count can't be less than 1 ");
        }

    }

    const increaseItemCount=() => {
         // setItemCount(prvCount => prvCount + 1)
        // setItemCount( (prev) => prev + 1);
        dispatch(increaseQuantity(data.id))
    }

    return(
        <div className="w-full mt-4 p-[2.4px]
                        text-[8px] text-center">
            <button className="float-left
                 text-[8px] bg-yellow-300
                 rounded-lg h-5 w-5" onClick={decreaseItemCount}>-</button>
            <small className="text-[8px]">{item?.itemCount}</small>
            <button className="float-right
                 text-[8px] bg-yellow-300
                 rounded-lg h-5 w-5" onClick={increaseItemCount}>+</button>

        </div>
    );
}