import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";


export default function Header() {
  return (
    <div className="flex items-center justify-between font-bold border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">Fast Pizza</Link>
        <SearchOrder />

        <Username />
    </div>
  )
}
