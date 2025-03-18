const Button = (props) => {
    const {children = "Pencet", variant = "bg-green-500"} = props
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">{children}</button>
    )
  }

  export default Button