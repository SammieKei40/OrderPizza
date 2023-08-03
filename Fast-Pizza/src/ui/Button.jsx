import { Link } from "react-router-dom"

export default function Button({children,disabled, to, type, onClick}) {
    const base = 'bg-yellow-400 cursor-pointer text-sm uppercase font-semibold hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow focus:bg-yellow-300 focus:ring-offset-2 tracking-wide rounded-full text-stone-800 py-3 px-4 disabled:cursor-not-allowed'
    const styles = {
        primary: base + 'px-4 py-3 md:px-6 md:py-4',
        small: base + 'py-2 md:px-5 md:py-2.5 px-4 text-xs',
        round: base + 'py-1 md:px-3.5 md:py-2 px-2.5 text-xs',
        secondary: 'border-2 text-sm border-stone-300 uppercase hover:text-stone-800 focus:text-stone-800 font-semibold hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 tracking-wide rounded-full text-stone-400 py-3 px-4 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5'
    }

    if(to) return <Link to={to} className={styles[type]}>{children}</Link>

    if(onClick) return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}
           >{children}</button>
    )
  return (
    
        <button disabled={disabled} className={styles[type]}
           >{children}</button>
    
  )
}
