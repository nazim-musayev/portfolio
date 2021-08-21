import { createTheme } from '@material-ui/core/styles'

const primaryColor = "#fff"
const secondaryColor = "rgb(255,118,82)"
const lightGreyColor = "rgb(158, 158, 158)"

const theme = createTheme({
    palette : {
       primary : {
         main : primaryColor
       },
       secondary : {
         main : secondaryColor
       },
       info : {
         main : "rgba(0, 255, 178, 0.15)"
       }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 800,
        lg: 1080,
        xl: 1920,
      },
    },
    overrides: {
      MuiPaper : {
        root : {
          backgroundColor : "#111",
          color : primaryColor
        }
      },
      MuiTypography : {
        h5 : {
          fontWeight : "bold"
        },
        h4 : {
          fontWeight : "bold"
        },
        overline : {
          fontSize : "16px"
        }
      },
      MuiChip : {
        label : {
          color : primaryColor
        }
      },
      MuiDivider : {
        root : {
          backgroundColor : lightGreyColor,
          
        }
      },
      MuiFormLabel : {
        root : {
          color : lightGreyColor
        }
      },
      MuiOutlinedInput : {
        root : {
          color : primaryColor
        },
        notchedOutline : {
          borderColor : lightGreyColor
        }
      },
      MuiSkeleton : {
        root : {
          backgroundColor : "rgba(0, 255, 178, 0.15)"
        }
      },
      MuiListItem : {
        button : {
          "&:hover" : {
            backgroundColor : secondaryColor
          }
        }
      }
    },
})

export default theme