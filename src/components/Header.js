import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import DrawerIcon from './DrawerIcon'

const Header = ({handleDrawer}) => {
    const md = useMediaQuery('(max-width:800px)')

    const navs = [
        {
            title : "About",
            path : "/"
        },
        {
            title : "Contact",
            path : "/contact"
        },
        {
            title : "Projects",
            path : "/projects"
        }
    ]

    return (
        <Box display="flex" p={3} alignItems="center" mb={5}>
            <Box flexGrow={1} >
                <img alt="Coder Avatar" src="coder.png" width={65} height={65} />
            </Box>
                
            { md ? (
                <DrawerIcon handleDrawer={handleDrawer} />
            ) : (
                <Box display="flex" justifyContent="space-around" p={2} width={350}>
                {navs.map(({title, path}) => (
                    <Typography variant="overline" key={title}>
                        <Link href={path}>
                            {title}
                        </Link>
                    </Typography>
                    
                ))}
                </Box>
            )}
        </Box>
    )
}

export default Header
