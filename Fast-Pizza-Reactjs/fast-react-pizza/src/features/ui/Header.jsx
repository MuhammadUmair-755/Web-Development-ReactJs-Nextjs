import { Link } from "react-router-dom"
import SearchOrder from "../order/SearchOrder"
import Username from "../user/Username"

function Header() {
    return (
        <header className="flex justify-between items-center bg-yellow-500 uppercase p-4 border border-stone-1 sm:px-6 ">
             <Link to='/' className="tracking-[5px]">Fast React Pizza Co.</Link>
             <SearchOrder/>
             <Username/>
        </header>
    )
}

export default Header
