const Button = ({type = "button"}) => {
  return (
    <button type={type} className="py-2 bg-slate-200 hover:bg-slate-300 ring-1 ring-slate-400 w-full rounded-md duration-300 transition font-semibold text-lg">
        Buat Catatan
    </button>
  )
}

export default Button
