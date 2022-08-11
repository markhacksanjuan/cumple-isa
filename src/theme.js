import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    marginTop: '35px',
                    marginBottom: '50px'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    marginTop: '50px',
                    marginBottom: '50px',
                    padding: '0 25px'
                },
                inherit: {
                    color: 'rgb(250, 10, 20)',
                    margin: '0 30px',
                    marginTop: '25px'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    marginTop: '35px'
                }
            }
        }
    }
})
export default theme