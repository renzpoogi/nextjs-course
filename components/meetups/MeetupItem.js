import {useRouter} from "next/router";
import classes from './MeetupItem.module.css'
import Card from "../ui/Card";
// import FavoritesContext from "../../store/favorites-context";


function MeetupItem(props) {
    const router = useRouter();
    const  { image, title, address,description} = props.meetup
    // const favoritesContext = useContext(FavoritesContext)

    // const itemIsFavorite = favoritesContext.itemIsFavorite(props.id)

    // function toggleFavoriteStatusHandler() {
    //     if (itemIsFavorite) {
    //         favoritesContext.removeFavorite(props.id)
    //     }else {
    //         favoritesContext.addFavorite({
    //             id: props.id,
    //             title,
    //             description,
    //             image,
    //             address
    //         })
    //     }
    // }
    function showDetailsHandler () {
        router.push('/' + props.id)
    }

    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={showDetailsHandler}>Show Details</button>
            </div>
            </Card>
        </li>
    )
}
export default MeetupItem;