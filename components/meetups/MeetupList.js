import classes from './MeetupList.module.css'
import MeetupItem from "./MeetupItem";
function MeetupList(props) {
    return (
    <ul className={classes.list}>
        {props.meetups.map(meetup => <MeetupItem key={meetup.id}  meetup={meetup} id={meetup.id} />)}
    </ul>
    )
}
export default MeetupList;