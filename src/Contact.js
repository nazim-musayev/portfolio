import Typography from "@material-ui/core/Typography"
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { IoMdCall } from 'react-icons/io'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useEffect } from 'react'

const Contact = ({handleSnackBar}) => {

    useEffect(() => {
        document.title="Contact"
    },[])

    const icons = [ 
        {
            icon : <BsFillPersonLinesFill />,
            id : 1
        },
        {
            icon : <ImLocation />,
            id : 2
        },
        {
            icon : <AiOutlineMail />,
            id : 3
        },
        {
            icon : <IoMdCall />,
            id : 4
        }
    ]

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters')
    })

    const {register, handleSubmit, reset, formState : {errors} } = useForm({
        resolver: yupResolver(validationSchema)
        })

    const onSubmit = data => {
        console.log(data)
        reset()
        handleSnackBar()
    }

    return (
        <>
            <Box display="flex" flexDirection="column" p={2} mb={2.5}>
              <Typography align="center" variant="body2" gutterBottom>
                  Feel free to contact me anytimes
              </Typography>

              <Typography align="center" variant="h5">
                  Get in Touch
              </Typography>
            </Box>

            <Grid container spacing={4}> 

              <Grid item xs={12} md={6}>
                  <Box mb={4} height={400}>

                    <Typography variant="h6" gutterBottom>
                        Message me
                    </Typography>

                    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}
                     action="https://formsubmit.com/nazim.musa.555@gmail.com" method="POST" >
                      <Box height={280} display="flex" flexDirection="column" justifyContent="space-between" mb={2}>

                        <TextField label="Name" name="name" variant="outlined" fullWidth {...register('name')} 
                        error={errors.name ? true : false} helperText={errors.name?.message} />
               
                        <TextField label="Email" name="email" variant="outlined" fullWidth {...register('email')} 
                         error={errors.email ? true : false} helperText={errors.email?.message} />
                
                        <TextField label="Message" name="message" variant="outlined" fullWidth multiline rows={3}
                         {...register('message')} error={errors.message ? true : false} 
                         helperText={errors.message?.message} />

                      </Box>

                      <Button variant="outlined" color="secondary" type="submit">
                        Send Message
                      </Button>
                    </form>

                  </Box>
              </Grid>

              <Grid item xs={12} md={6}>

                <Box>
                    <Typography variant="h6" gutterBottom>
                        Contact Info
                    </Typography>

                    <Typography variant="body2">
                        Always available for freelance work if the right project comes along, Contact me!
                    </Typography>

                </Box>

                <Box display="flex" height={250} mt={4}>

                    <Box display="flex" flexDirection="column" justifyContent="space-around">
                        {icons.map(({icon, id}) => (
                            <Icon fontSize="large" color="secondary" key={id}>
                                {icon}
                            </Icon>
                        ))}
                    </Box>

                    <Box display="flex" flexDirection="column" justifyContent="space-between"
                     ml={4} borderLeft={1} p={2} >

                        <Typography variant="subtitle1" gutterBottom>
                             Nazim Musayev
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            Baku, Azerbaijan
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            nazim.musa.555@gmail.com
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            +994 50 526 09 50
                        </Typography>

                    </Box>
                </Box>
    
            </Grid>
          </Grid>
        </>
    )
}

export default Contact
