import IconButton  from '@material-ui/core/IconButton';
import { RiMenuFoldLine } from 'react-icons/ri';


const Icon = ({handleDrawer}) => {
  return (
    <IconButton edge="end" color="secondary" onClick={handleDrawer}>
      <RiMenuFoldLine />
    </IconButton>
  )
};

export default Icon;
