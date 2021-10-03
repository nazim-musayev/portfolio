import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/Skeleton';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [skeleton, setSkeleton] = useState(true);

  const projects = [
    {
      src: "watchlist.png",
      title: "Watchlist",
      path: "https://watchlist-ts.web.app/",
      text: "This is the first project that i am using Firebase products and Typescript.",
      tools: ["NEXT JS", "CONTEXT API", "TYPESCRIPT", "FIREBASE(AUTH, FIRESTORE,CLOUD FUNCTIONS)", 
              "MATERIAL UI", "REACT HOOK FORM", "REACT FRAMER MOTION"]
    },
    {
      src: "commerce.png",
      title: "E-Commerce",
      path: "https://next-commerce.netlify.app/",
      text: `This is my second project, which you can live a real e-commerce experience when wandering around in app. 
             You can add things to shopping cart, wishlist or remove them and etc.`,
      tools: ["NEXT JS", "REDUX(REDUX PERSIST)", "MATERIAL UI", "REACT HOOK FORM", "NETLIFY IDENTITY"]
    },
    {
      src: "recipe.png",
      title: "Recipe Blog",
      path: "https://recipe-xi.vercel.app/",
      text: "Recipe Blog is just simple app contains multiple static pages.",
      tools: ["NEXT JS", "MATERIAL UI", "CONTENTFUL(CMS)"]
    }
  ];

  useEffect(() => {
    document.title="Projects";
    
    const timer = setTimeout(() => {
      setSkeleton(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box mx={4}>
      {projects.map(project => (
        <Grid container key={project.title} spacing={8}>
          <Box clone display={{ xs : "none", md : "block"}}>
            <Grid item md={1}></Grid>
          </Box>
          <Grid item xs={12} md={10} >
            {skeleton ? <Skeleton variant="text" height={50} /> : (
              <Typography variant="h5">
                {project.title}
              </Typography>
            )}
            {skeleton ? <Skeleton variant="rect" width="100%" height={400} /> : (
              <Box bgcolor="info.main" borderRadius="borderRadius" border={1} 
               borderColor="grey.500" p={3} my={2.5}
              >
                <Link href={project.path}>
                  <Box mb={2}>
                    <img src={project.src} width="100%" height="auto" alt={project.title}  />
                  </Box>
                </Link>
                <Typography align="justify">
                  {project.text}
                </Typography>
                {project.tools.map(tool => (
                  <Box key={tool}>
                    <Typography variant="caption">
                      {tool}
                    </Typography>
                  </Box>
                ))}
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
};

export default Projects;
