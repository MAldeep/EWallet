export default function NavBar() {
    return (
        <nav className="col-12 p-4 text-white bg-dark shadow">
            <ul className=" list-unstyled d-flex justify-content-evenly align-items-center">
                <li className="fs-4">Balance</li>
                <button className="btn btn-danger fs-5">Logout</button>
            </ul>
        </nav>
    );
}
