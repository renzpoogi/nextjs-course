import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"
import {useRef} from "react";


function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(e) {
        e.preventDefault()
        const title = titleInputRef.current.value;
        const image = imageInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;


        const meetupData = {
            title,
            image,
            address,
            description
        }
        props.onAddMeetup(meetupData)
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea  rows="5"  id="description" ref={descriptionInputRef} required  />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetupForm;