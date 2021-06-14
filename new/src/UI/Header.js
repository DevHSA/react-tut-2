import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={classes.header}>
      <div style={{border:'1px solid'}}>Logo</div>

      <div className={classes.menu}>
        
          <div>
            <NavLink to="/menu1" activeClassName={classes.active}>
              Menu 1
            </NavLink>
          </div>
          <div>
            <NavLink to="/menu2" activeClassName={classes.active}>
                Menu 2
            </NavLink>
          </div>
          <div>
                <div className={classes.dropdown}>

                    Dropdown
                    <div className={classes.dropdowncontent}>
                        <p>ITEM 1</p>
                        <p>ITEM 2</p>
                    </div>
                    

                </div>

          </div>
      </div>
    </div>
  );
};

export default Header;
