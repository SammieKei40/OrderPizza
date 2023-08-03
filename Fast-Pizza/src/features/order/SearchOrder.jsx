import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchOrder() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        if(!query) return
        navigate(`/order/${query}`)
        setQuery("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 w-28 sm:w-64
        sm:focus:w-72 transition-all duration-300 focus:outline-none
        focus:ring focus:ring-opacity-50 focus:ring-yellow focus-bg-yelow-500 focus:ring-offset-2"
        type="text" placeholder="Search Order" value={query} onChange={(e) => setQuery(e.target.value)}/>
        </form>
    </div>
  )
}
