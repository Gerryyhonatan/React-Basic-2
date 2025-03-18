const Button = (props) => {
    const {children = "Pencet", color = "bg-green-500"} = props
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${color} text-white`} type="submit">{children}</button>
    )
  }

  export default Button