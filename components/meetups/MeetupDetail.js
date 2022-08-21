import {Fragment} from "react";
import classes from "./MeetupDetail.module.css"
import Image from 'next/image'
function MeetupDetail ({image, title, description,address}) {

    return (
        <section className={classes.detail}>
            <Image src={image} alt="description" />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>

        </section>
    )
}

export async function getStaticPaths() {
    return {
        fallback:false,
        paths: [
            {params: {meetupId:1}},
            {params: {meetupId:2}}
        ],
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    console.log(meetupId)
    return {
        props: {
           meetupData : {
               id: meetupId,
               title: "Meetup 1",
               description: "Meet me in the room",
               image: "https://www.techadvisor.fr/cmsdata/features/3668389/google_image_inversee_thumb800.jpg",
               address: 'Address 1',
           }
        }
    }
}

export default MeetupDetail;