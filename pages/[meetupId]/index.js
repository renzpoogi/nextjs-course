import {Fragment} from "react";
import Head from "next/head";
import {MongoClient, ObjectId} from 'mongodb'
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails (props) {
    const detail = {

            title: props.meetupData.title,
            description: props.meetupData.description,
            image: props.meetupData.image,
            address: props.meetupData.address,}
    return (
        <Fragment >
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail {...detail}  />
        </Fragment>
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://admin:admin123@cluster0.s0pt4il.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({},{_id: 1}).toArray();
    client.close()
    return {
        fallback: false,
        paths: meetups.map(meetup => ({params: {meetupId:meetup._id.toString()}}))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    const client = await MongoClient.connect('mongodb+srv://admin:admin123@cluster0.s0pt4il.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    client.close()
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                description: selectedMeetup.description,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
            }
        }
    }
}

export default MeetupDetails;