import { Box, Typography ,makeStyles} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness'
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';
const useStyles=makeStyles({
    component: {
        margin:50
    },
    row: {
        padding:5,
        fontSize:20,
        letterSpacing:2
    },
    value: {
        color:'#fff'
    },
    icon:  {
        marginRight:10,
        color:'darked'
    }
})

const Information = ({data}) => {
    const classes = useStyles();
    
    return (
        data ?
        <Box className = {classes.component}>
        <Typography className = {classes.row}><LocationOnIcon  className={classes.icon}/>Location : <Box className = {classes.value}component="span">{data.name}, {data.sys.country}</Box> </Typography>
        <Typography className =  {classes.row}><SettingsBrightnessIcon className={classes.icon} />Temperature :<Box className = {classes.value}component="span">{data.main.temp} °C</Box></Typography>
        <Typography className = {classes.row}><OpacityIcon  className={classes.icon}/>Humidity :<Box className = {classes.value}component="span"> {data.main.humidity} %</Box></Typography>
        <Typography className = {classes.row}><Brightness5Icon className={classes.icon} />Sun Rise : <Box className = {classes.value}component="span">{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</Box></Typography>
        <Typography className = {classes.row}><Brightness6Icon className={classes.icon} />SunSet : <Box className = {classes.value}component="span">{new Date(data.sys.sunset *1000).toLocaleTimeString()}</Box></Typography>
        <Typography className = {classes.row}><DehazeIcon className={classes.icon} />Condition :<Box className = {classes.value}component="span">{data.weather[0].main} </Box></Typography>
        <Typography className = {classes.row}><CloudIcon className={classes.icon} />Clouds :<Box className = {classes.value}component="span">{data.clouds.all} %</Box></Typography>

        </Box> : ''
    )
}

export default Information;