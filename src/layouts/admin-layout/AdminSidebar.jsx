import React       from "react";
import { useHistory } from "react-router-dom"
import { Nav }     from "reactstrap";

function AdminSidebar() {
  let history = useHistory();

  const gotoRoute = (path) => () => {
    history.push(path)
  }

  return (
    <div className="sidebar" data-color="orange">
      <div className="logo">
        <span className="simple-text logo-normal">
          MERN - FOOD
        </span>
      </div>

      {/*Navigation*/}
      <div className="sidebar-wrapper">
        <Nav className="nav-link active">
          <li onClick={gotoRoute("/admin/products")} >
              <p>Products</p> 
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default AdminSidebar;
