import {stayData} from '../staydata';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './Stays.module.scss';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ReactComponent as StarIcon } from '../Assets/icon-star.svg';

const Stays = (props) => {
  const superHost='superhost';

return (
      <div className={styles.staycontainer}>
       
        {stayData.filter(data => {
          if(props.location !== ''){
         return props.location.includes(data.city)
          } else {
            return true;
          }
        }).filter(data => {
          if(props.guests !== '') {
            return parseInt(props.guests) <= data.maxGuests
          } else {
            return true;
          }
        }).map((data, key) => {
          return (
            <Card key={key} className={styles.card}>
               <CardMedia className={styles.media}
                  image={data.photo}
                  title={data.title}
               />
                <CardContent>
                <Box display="flex" flexDirection="row">
                { data.superHost ? <Box  border={1}  paddingLeft={2} paddingRight={2} marginRight={1} borderRadius={16} className={styles.superHost}>
                    {superHost}
                 </Box> : null }  
                 <Box > 
                   <Typography className={styles.type} >
                      {data.type}
                   </Typography>
                 </Box>
                 <Box  >
                  { data.beds !== null  ? <Typography className={styles.type}>
                 .{data.beds} beds
                 </Typography> : null }
                 </Box>
                 <Box className={styles.ratingContainer}>
                     <Typography className={styles.rating}>
                     <StarIcon className={styles.star} /> {data.rating}
                     </Typography>
                 </Box>
                 </Box>
                
                 <Box mt={2}>
                 <Typography className={styles.title} variant="h6" >
                   {data.title}
                 </Typography>
                 </Box>
                 </CardContent>
            </Card>
          );
        })}
      </div>
  );
}

export default Stays