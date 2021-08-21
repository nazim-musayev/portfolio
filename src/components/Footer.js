import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'


const Footer = () => {

    const icons = [
        {
            icon : <FiGithub />,
            path : "https://github.com/nazim-musayev"
        },
        {
            icon : <AiOutlineLinkedin />,
            path : "https://www.linkedin.com/in/nazim-musayev/"
        },
        {
            icon : <AiOutlineFacebook />,
            path : "https://www.facebook.com/musayevna0zim/"
        }      
]

    return (
        <Box display="flex" justifyContent="center" mt={3}>
            {icons.map(({icon, path}) => (
                <IconButton key={path}>
                    <Link href={path}>
                         {icon} 
                    </Link>
                </IconButton>
            ))}
        </Box>
    )
}

export default Footer
