import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const nameInput = useRef();
  const emailInput = useRef();
  const passInput = useRef();
  const navigate = useNavigate();
  const handleSubmit = (ev)=>{
    ev.preventDefault();
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const password = passInput.current.value;
    const userObj = {name, email, password};
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    allUsers.push(userObj);
    localStorage.setItem("users", JSON.stringify(allUsers));
    localStorage.setItem("currentUser", JSON.stringify(userObj));
    navigate("/balance");
  }
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="col-10 col-md-6 p-4 rounded shadow border d-flex flex-column justify-content-center align-items-center gap-4">
        <h1>Register</h1>
        <input ref={nameInput} type="text" className="form-control" placeholder="Enter your name"/>
        <input ref={emailInput} type="text" className="form-control" placeholder="Enter your email"/>
        <input ref={passInput} type="text" className="form-control" placeholder="Enter your password"/>
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  )
}
