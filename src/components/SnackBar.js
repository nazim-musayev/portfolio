import { makeStyles } from "@material-ui/core/styles"
import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const SnackBar = ({snackBar, handleSnackBar}) => {
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
   handleSnackBar()
  }

  return (
    <div className={classes.root}>
      <Snackbar open={snackBar} autoHideDuration={4000} onClose={handleClose}
       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>

        <Alert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Thanks for reaching out
        </Alert>

      </Snackbar>
    </div>
  )
}

export default SnackBar