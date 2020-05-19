// Dependency
import React from 'react'
import Collapse from '@material-ui/core/Collapse'
import ListItemText from '@material-ui/core/ListItemText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

function Filters() {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="FILTRO" className="menu-filters__title_filter" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <FormControlLabel control={<Checkbox checked={false} name="checkedA" />} label="FILTRO 1" />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox checked={false} name="checkedA" />} label="FILTRO 2" />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox checked={false} name="checkedA" />} label="FILTRO 3" />
          </ListItem>
          <ListItem>
            <FormControlLabel control={<Checkbox checked={false} name="checkedA" />} label="FILTRO 4" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  )
}

Filters.propTypes = {}

export default Filters
