import {useRouter} from "next/router";
import {Fragment} from "react";
import Head from 'next/head'
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(meetup) {
    const res = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const data = await res.json();
    console.log(data);
    router.push('/')
    }
    return (
        <Fragment>
            <Head>
                <title>New Meetup</title>
                <meta name="description" content="Add new Meetup" />
            </Head>
            <NewMeetupForm onAddMeetup = { addMeetupHandler }/>
        </Fragment>
    )
}
export default NewMeetupPage;