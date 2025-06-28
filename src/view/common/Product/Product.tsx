// import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slice/cartSlice.ts";

// type ProductData = {
//     id: number,
//     name: string,
//     price: number,
//     currency: string,
//     image: string
// }
type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob(
    '../../../assets/products/*',
    {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    // console.log(images);

    // console.log(`../../../assets/products/${data.image}`)

    const image = images[`../../../assets/products/${data.image}`];

  const dispatch =  useDispatch<AppDispatch>();

    // const [isActive, setIsActive]
    //     = useState(false);
    //state eken data tika ganna

   const  item = useSelector((state:RootState) => state.cart.items.find(cartItem => cartItem.product.id === data.id));


    const addToCart = () => {
        dispatch(addItemToCart(data))
        // setIsActive(true);
    }

    return (
        <div className="w-32 h-40 mr-2 mb-2 justify-center items-center
                               shadow-lg rounded-lg border border-green-300
                               hover:bg-green-300">
            <div>
                <img className="h-[90px] w-[90px]"
                     src={image} alt=""/>
            </div>
            <div className="flex mt-2">
                <div>
                    <h3 className="text-[#1f9e4b]
                                          text-[14px] pl-2 pr-2">
                        {data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[12px] pl-1">{data.price}
                        <small className="text-[7px] pl-1">{data.currency}</small></h3>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    item ? (
                        <ModifyCart data={data}/>
                    ) : (
                        <button className="w-full mt-4
                            p-[2.4px] bg-[#1f9e4b] text-[12px]
                            text-white border-gray-500 border-[0.5px] rounded-lg h-6"
                                onClick={addToCart}>Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}