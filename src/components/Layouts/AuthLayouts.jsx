import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
    const {children, title, type} = props;
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    return (
        <div className={`flex justify-center items-center min-h-screen ${isDarkMode && "bg-slate-800"}`}>
        <div className="w-full max-w-xs">
          <button className="absolute top-2 right-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Light" : "Dark"}
          </button>
          <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
          {children}
          <p className="text-sm mt-5 text-center"> 
          {type === "login" ? "Don't have an account? " : "Already have an account? "}
          {type === "login" ? (
            <Link to="/register" className="font-bold text-blue-600">Register</Link>
          ) : (
            <Link to="/login" className="font-bold text-blue-600">Login</Link>
          )}
          </p>
        </div>
        </div>
    )
}

export default AuthLayouts