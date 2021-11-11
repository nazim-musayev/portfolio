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
      src: "youtube.png",
      title: "YouTube Clone (Dark Mode)",
      path: "https://youtube-cln.netlify.app/",
      text: "This is a YouTube Clone. It is hybrid (CSR + SSR), contains multiple pages. And each pages has different videos that you can choose one of them to watching. Also it is only project i did not made responsive.",
      textTwo: ["HOME - Videos mixed-up by default, but there is a chip bar contains categories and you can fetch a list of videos different from mixed-up one by category with choosing one of them.",
                "EXPLORE - Trending videos for Azerbaijan",
                "SEARCH - Search results for any keyword or tag you entered in search bar",
                "WATCH - In this page you can watch videos, read comments and etc.. Also you can see some videos related that video."
               ],
      tools: ["NEXT JS", "CONTEXT API", "TYPESCRIPT", "MATERIAL UI", "YOUTUBE DATA API"]
    },
    {
      src: "linkedin.png",
      title: "LinkedIn Clone",
      path: "https://linkedin-pi.vercel.app/",
      text: "In this project my goal was just building identical UI as much as possible. Also I added a couple of animations like you can experience in Linkedin. So here it is.",
      tools: ["NEXT JS", "TYPESCRIPT", "MATERIAL UI", "FRAMER MOTION"]
    },
    {
      src: "watchlist.png",
      title: "Watchlist",
      path: "https://watchlist-ts.web.app/",
      text: "This is the first project that i am using Firebase products and Typescript.",
      tools: ["NEXT JS", "CONTEXT API", "TYPESCRIPT", "FIREBASE(AUTH, FIRESTORE,CLOUD FUNCTIONS)", "MATERIAL UI", "FRAMER MOTION", "REACT HOOK FORM"]
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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box mx={4}>
      {projects.map(project => (
        <Grid container key={project.title} spacing={8} justifyContent="center">
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
                <Box my={1}>
                  {project.textTwo && project.textTwo.map((item, index) => (
                    <Typography variant="caption" display='block' key={index}>
                      {item}
                    </Typography>
                  ))}
                </Box>
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
        </Grid>
      ))}
    </Box>
  )
};

export default Projects;
