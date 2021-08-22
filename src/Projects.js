import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Skeleton from '@material-ui/lab/Skeleton'
import { useState, useEffect } from 'react'

const Projects = () => {
  const [skeleton, setSkeleton] = useState(true)

  useEffect(() => {
    document.title="Projects"
    setTimeout(() => {
      setSkeleton(false)
    }, 3000);
  }, [])

  const projects = [
      {
        src : "commerce.png",
        title : "E-Commerce",
        path : "https://next-e-commerce.netlify.app/",
        text : `This is my second project, which you can live a real e-commerce experience when wandering around
                in app. You can add things to shopping cart, wishlist or remove them and etc. I am using Next JS 
                as a framework, Redux for state management and Redux-persist for persist store. So when reload or
                revisit the page another time you can find exact interactions you had before in store. Besides 
                that i am also using Material UI, Netlify Identity for Authentication and React Hook Form for 
                validate two different forms in this project.`
      },
      {
        src : "recipe.png",
        title : "Recipe Blog",
        path : "https://recipe-xi.vercel.app/",
        text : `Recipe Blog is just simple app contains multiple static pages. This is my first project and 
                unlike cloning something i tried challenge my skills, so can indicate to me what i am capable 
                of and how can i make things from scratch. I am using Next JS as a framework, Material UI and
                Contentful (CMS) for recipe content.`
      },
    ]

    return (
        <Box mx={4}>

          {projects.map(project => (
            <Grid container key={project.title} spacing={5}>

              <Box clone display={{ xs : "none", md : "block"}}>
                <Grid item md={1}></Grid>
              </Box>

              <Grid item xs={12} md={10} >

                {skeleton ? <Skeleton variant="text" /> : (
                    <Typography variant="h5">
                      {project.title}
                    </Typography>
                ) }
                
                {skeleton ? <Skeleton variant="rect" width="100%" height={300} /> : (
                  <Box bgcolor="info.main" borderRadius="borderRadius" border={1} 
                    borderColor="grey.500" p={3} my={2.5}>
   
                     <Link href={project.path}>
                       <Box mb={2}>
                           <img src={project.src} width="100%" height="auto" alt={project.title}  />
                       </Box>
                     </Link>
        
                     <Typography align="justify">
                       {project.text}
                     </Typography>
                  </Box>
                )}
            
              </Grid>

              <Box clone display={{ xs : "none", md : "block"}}>
                <Grid item md={1}></Grid>
              </Box>
          
            </Grid>
            ))}
            
        </Box>
    )
}

export default Projects
