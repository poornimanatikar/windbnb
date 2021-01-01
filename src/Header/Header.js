import Logo from '../Assets/logo.svg';
import styles from './Header.module.scss';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Header = (props) => {
const heading="Stays in Finland";
return <>
        <div className={styles.header}>
         <img className={styles.headerIcon} src={Logo}/>
         <div className={styles.searchResult}>
          <div className={styles.locationResult}>
            {props.location !=='' ? props.location : 'Location'}
          </div>
          <div className={styles.guestResult}>
            {props.guests !== '0 Guests' ? props.guests: 'Add Guests'}
          </div>
          <div className={styles.buttonResult} onClick={()=> props.setFilterOpen(!props.filterOpen)}>
             <IconButton>
               <Search />
             </IconButton>
          </div>
        </div>
       </div>
        <div className={styles.stayHeader}>
        <Box ml={2} mr={2} display="flex" flexDirection="row" justifyContent="space-between">
         <Box>
           <Typography className={styles.heading}>
            {heading}
           </Typography>
         </Box>
         <Box>
         <Typography className={styles.stays}>
           12+ Stays
          </Typography>
         </Box>
         
        </Box>

      </div>
      </>

}
export default Header 