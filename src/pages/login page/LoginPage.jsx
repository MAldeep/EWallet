export default function LoginPage() {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <form className="col-10 col-md-6 p-4 rounded border shadow d-flex flex-column justify-content-center align-items-center gap-4">
        <h1>Login</h1>
        <input type="text" placeholder="Enter your email" className="form-control" />
        <input type="text" placeholder="Enter your password" className="form-control" />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
