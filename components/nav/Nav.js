// Dependency
import React from 'react'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Search } from '@material-ui/icons'

// Components
import NavMenuItem from './NavMenuItem'

const Nav = () => {
  return (
    <div className="nav">
      <div className="container nav__container">
        <div className="d-flex justify-content-between my-5">
          <img src="logo-labarra.svg" alt="Logo La Barra CCU" />
          <Input
            id="standard-adornment-amount"
            endAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
          />
        </div>

        <div className="d-flex justify-content-between">
          <NavMenuItem text="Cerveza 1" url="/cerveza-url-test" />
        </div>
      </div>
    </div>
  )
}

export default Nav
