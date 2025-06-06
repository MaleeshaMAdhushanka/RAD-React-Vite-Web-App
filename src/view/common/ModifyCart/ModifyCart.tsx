import {CartItem} from "../../../model/CartItem.ts";
import {useEffect, useState} from "react";

interface ModifyCartProps {
    data: CartItem
}

export const  itemList: CartItem[] = [];

export function ModifyCart({ data }: ModifyCartProps) {

    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
        const existingItem = itemList.find(item => item.product.id === data.product.id);

        if (existingItem){
            existingItem.itemCount = itemCount;
        } else {
            itemList.push({
                product: data.product,
                itemCount: itemCount
            });
        }
        console.log(itemList);

    },[itemCount, data])

    const decreaseItemCount =() => {
        setItemCount(prevValue =>
           prevValue > 1
            ? prevValue - 1
               :(alert("Item count cant't" +
                      "be less than 1"),
                   prevValue
               )

        )

    }

    const increaseItemCount=() => {
         setItemCount(prvCount => prvCount + 1)
    }

    return(
        <div className="w-full mt-4 p-[2.4px]
                        text-[8px] text-center">
            <button className="float-left
                 text-[8px] bg-yellow-300
                 rounded-lg h-5 w-5" onClick={decreaseItemCount}>-</button>
            <small className="text-[8px]">{itemCount}</small>
            <button className="float-right
                 text-[8px] bg-yellow-300
                 rounded-lg h-5 w-5" onClick={increaseItemCount}>+</button>

        </div>
    );
}