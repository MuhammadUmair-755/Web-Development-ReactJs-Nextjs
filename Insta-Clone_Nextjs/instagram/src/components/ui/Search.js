import { SearchIcon } from "lucide-react"

function Search() {
    return (
        <div className="flex items-center gap-1.5 bg-secondary rounded-4xl px-3 py-2.5">
            <SearchIcon className="h-5"/>
           <input className="text-app-text focus:outline-none" placeholder="Search"/> 
        </div>
    )
}

export default Search
