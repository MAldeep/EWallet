export default function RegisterPage() {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <form className="col-10 col-md-6 p-4 rounded shadow border d-flex flex-column justify-content-center align-items-center gap-4">
        <h1>Register</h1>
        <input type="text" className="form-control" placeholder="Enter your name"/>
        <input type="text" className="form-control" placeholder="Enter your email"/>
        <input type="text" className="form-control" placeholder="Enter your password"/>
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  )
}
