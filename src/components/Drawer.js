import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import { MdCancel } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import Cv from './Cv'


const MenuDrawer = ({drawer, handleDrawer}) => {
  const history = useHistory()

  const menuItems = [
    {
      text : "About",
      path : "/", 
    },
    {
      text : "Contact",
      path : "/contact", 
    },
    {
      text : "Projects",
      path : "/projects", 
    }
   ]

  return (
    <Box >  
        <Drawer open={drawer} onClose={handleDrawer} variant="temporary" anchor="right">

        <Box display="flex" justifyContent="space-between" alignItems="center" width="100vw" p={3.5}>
            <Cv />
            
            <IconButton onClick={handleDrawer} edge="end" color="primary">
                <MdCancel />
            </IconButton>
        </Box>

        
        <Box display="flex" justifyContent="center" mb={3} borderBottom={1} borderTop={1} p={1}>
          <List>

            {menuItems.map(({text, path}) => (
              <ListItem button key={path} onClick={() => {handleDrawer(); history.push(path)}}>
                  <ListItemText primary={text} />
              </ListItem>
            ))}
            
          </List>
        </Box>

        <Footer />

      </Drawer>
    </Box>
  )
}

export default MenuDrawer