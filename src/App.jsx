import React from "react"

const Button = (props) => {
  const {children = "Pencet", variant = "bg-green-500"} = props
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">{children}</button>
  )
}

function App() {
  return (
      <div className="bg-blue-900 flex justify-center items-center min-h-screen text-white flex-col gap-4">
        <div>Hello World</div>
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-black">Logout</Button>
        <Button></Button>
      </div>
  )
}

export default App
