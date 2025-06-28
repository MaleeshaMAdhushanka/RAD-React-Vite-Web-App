import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slice/productSlice.ts";

// type ProductData = {
//     id: number,
//     name: string,
//     price: number,
//     currency: string
//     image: string
// };

//component eka run wenna kalin eka parak run wenawa
export function Home() {
    // const [products, setProducts] = useState<ProductData[]>([]);
    // store eke dfine kara app dispatch ekak gannawa

       const dispatch =  useDispatch<AppDispatch>();
       //use slector eken update state eka ganne
      const { list } = useSelector((state: RootState) => state.products);


    useEffect(() => {
        // const fetchData = async () => {
        //     try{
        //
        //         const  response = await fetch('./product-data.json');
        //         const  jsonData = await  response.json();
        //
        //         //console.log(jsonData);
        //         setProducts(jsonData);
        //
        //     } catch (error) {
        //         console.error('Error fetching data: ', error);
        //     }
        // }
        // fetchData();

        dispatch(getAllProducts())  //get All products method  tiger



    }, []);


    return(
         <div>
             <div className="flex flex-wrap ml-[1px] mt-22 mb-5
                            justify-center items-center mx-auto">
                 {
                     list.map((product ) => (
                         <Product key={product.id} data={product}/>
                     ))
                 }
             </div>

         </div>
    );
}