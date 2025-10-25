import React, {useState} from "react";
import Login from './Login'
import Register from "./Register";

function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  const switchtoRegister = () => setShowLogin(false)
  const switchtoLogin = () => setShowLogin(true)

  return (
    <>
      <div className="h-full w-3/6 border-1 flex items-center justify-center">
          {showLogin ? (
            <Login switchtoRegister={switchtoRegister}/>
          ) : (
            <Register switchtoLogin={switchtoLogin} />
          )}
        
      </div>
    </>
  );
}

export default AuthPage;

// {user ? (
//   <AiOutlineUser ... />
// ) : (
//   <NavLink to="/auth-page">Log in</NavLink>
// )}