import { IoPersonSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="sticky-top bg-white shadow-sm overflow-scroll">
      <nav className="navbar navbar-expand-lg container py-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="images/myntra_logo.webp"
            alt="Myntra Logo"
            height="40"
          />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Scrollable nav links on mobile */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-nowrap overflow-auto gap-2 px-2 text-nowrap">
            <li className="nav-item"><Link className="nav-link" to="#">Men</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Women</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Kids</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Home & Living</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Beauty</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Studio <sup className="text-danger">New</sup>
              </Link>
            </li>
          </ul>

          {/* Search bar hidden on small screens */}
          <form className="d-none d-lg-flex me-3 w-50" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
          </form>

          {/* Action icons */}
          <div className="d-flex align-items-center gap-3">
            <div className="text-center">
              <IoPersonSharp size={22} />
              <div style={{ fontSize: '12px' }}>Profile</div>
            </div>

            <div className="text-center">
              <IoMdHeart size={22} />
              <div style={{ fontSize: '12px' }}>Wishlist</div>
            </div>

            <Link
              to="/cart"
              className="text-center text-dark text-decoration-none position-relative"
            >
              <MdShoppingBag size={22} />
              <div style={{ fontSize: '12px' }}>Bag</div>
              {bag.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {bag.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
