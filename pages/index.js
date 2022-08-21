import {Fragment} from 'react'
import Head from 'next/head'
import MeetupList  from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";

function HomePage(props) {

    return (
           <Fragment>
               <Head>
                   <title>React Meetups</title>
                   <meta name="description" content="Meetup list for React meetups" />
               </Head>
           </Fragment>

    )
}

export async function getStaticProps() {
    //fetch data from api
    const client = await MongoClient.connect('mongodb+srv://admin:admin123@cluster0.s0pt4il.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title:meetup.title,
                description:meetup.description,
                image:meetup.image,
                address:meetup.address,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    }
}
export default HomePage