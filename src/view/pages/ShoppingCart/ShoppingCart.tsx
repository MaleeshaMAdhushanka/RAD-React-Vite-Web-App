//props type define kara pass kara
import {CartItem} from "../../../model/CartItem.ts";

//mn identigy karanne Cart Iteme type
interface ShoppingCartProps {
    itemsList:CartItem[];
}

//item list eke loop karann ayanne array eeke lenght eka blanne
//items list eken item eka and index eka
export function ShoppingCart({itemsList} : ShoppingCartProps) {
    return(
         <div  className="flex justify-center items-center px-4">
             <div className="w-full max-w-screen-2xl  border-green-200 border">
                 <table className="min-w-full border-collapse">
                     <thead>
                     <tr className="bg-green-700 text-white">
                         <th className="text-xs font-semibold border-green-600 border p-2">Id</th>
                         <th className="text-xs font-semibold border-green-600 border p-2">Name</th>
                         <th className="text-xs font-semibold border-green-600 border p-2">Unit Price</th>
                         <th className="text-xs font-semibold border-green-600 border p-2">Quantity</th>
                         <th className="text-xs font-semibold border-green-600 border p-2">Total Price</th>


                     </tr>
                     </thead>
                     <tbody>

                     {
                         itemsList.length === 0 ?(
                             <tr>
                                 <td colSpan={5} className="border-green-300 border p-2 bg-green-100">
                                     <p className="text-center text-sm text-white">No items to Display!</p>

                                 </td>
                             </tr>

                         ) : (
                             itemsList.map((item, index) => (
                                 <tr key={item.product.id}
                                     className={`${index % 2 === 0 ? "bg-green-100" : "bg-green-200"} hover:bg-green-600 border bg-green-300`}>
                                     <td className="text-xs border-green-300 border p-2">{item.product.id}</td>
                                     <td className="text-xs border-green-300 border p-2">{item.product.name}</td>
                                     <td className="text-xs border-green-300 border p-2">{item.product.price}
                                         {item.product.currency}</td>
                                     <td className="text-xs border-green-300 border p-2">{item.itemCount}</td>
                                     <td className="text-xs border-green-300 border p-2">{item.product.price * item.itemCount}
                                         {item.product.currency}
                                     </td>



                                 </tr>
                             ))
                         )
                     }


                     </tbody>

                 </table>

             </div>
         </div>
    );
}