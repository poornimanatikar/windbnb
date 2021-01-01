import React, { useState } from 'react';
import styles from './Search.module.scss';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';


const SearchComp = (props) => {
  const locations = ['Helsinki, Finland','Turku, Finland','Oulu, Finland','Vaasa, Finland'];
  const [adultCount,setAdultCount] = useState(0);
  const [childrenCount,setChildrenCount] = useState(0);
  const [location,setLocation] = useState('');


  const handleLocSel = (loc) => {
    setLocation(loc)
  }

  const handleClick = (op,guestType) => {
  switch(guestType) {
    case 'adult':
      if(op === 'minus') {
        setAdultCount(adultCount - 1);
      } else {
        setAdultCount(adultCount + 1);
      }
      break;
    case 'child':
      if(op === 'minus') {
        setChildrenCount(childrenCount - 1);
      } else {
        setChildrenCount(childrenCount + 1);
      }
      break;
  }

  }
  const handleSearch = () => {
    props.setFilterOpen(!props.filterOpen);
    props.handleSelection(location,`${childrenCount + adultCount}`);
  }
    return <div className={styles.searchParent}>
         <div className={styles.searchContainer}>
           <div className={styles.locContainer}>
               <button>
                  <div className={styles.locationLabel}>Location</div>
                  <div className={styles.locationText}>{location}</div>
                </button>
           </div>
           <div className={styles.guestContainer}>
               <button>
                 <div className={styles.guestsLabel}>Guests</div>
                 <div className={styles.guestsCount}>{adultCount + childrenCount} Guests</div>
                </button> 
           </div>
           <div className={styles.buttonContainer}>
           <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        startIcon={<Search />} onClick={()=> handleSearch()}
      > Search
        </Button>
      </div>
      </div>
      <div className={styles.searchResultContainer}>
      <List className={styles.list}>
      {locations.map((value,key) => {
        return (
        <ListItem key={key} button onClick={()=> handleLocSel(value)}>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary={value} />
        </ListItem>
      )})}
      </List>
      <div className={styles.guest}>
         <div className={styles.adultLabel}>
         <h4>Adults</h4>
         <span>Ages 13 and above</span><br/>
         <button onClick={() => handleClick('minus','adult')}>-</button> {adultCount}  <button onClick={() => handleClick('plus','adult')}>+</button>
         </div>
         <div className={styles.children}>
           <h4>Children</h4>
           <span>Ages 2-12</span><br/>
           <button onClick={() => handleClick('minus','child')}>-</button>  {childrenCount}  <button onClick={() => handleClick('plus','child')}>+</button>
         </div>
      </div>
      </div>
      </div>
    
}
export default SearchComp