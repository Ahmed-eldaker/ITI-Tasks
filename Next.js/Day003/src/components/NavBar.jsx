import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  if (session)
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-5">
          <div className="container">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
                <a className="nav-link" href="/products">
                  Products
                </a>
                <a
                  className="nav-link bg-secondary-subtle text-bg-warning rounded "
                  href="/products/addproduct"
                >
                  Add Product
                </a>
                <a className="nav-link" href="/posts">
                  Posts
                </a>
              </div>
            </div>
            <a href="/api/auth/signout">
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </button>
            </a>
          </div>
        </nav>
      </>
    );

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/posts">
                Posts
              </Link>
              <Link href="/api/auth/signin">
                <button
                  className="btn btn-primary "
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
