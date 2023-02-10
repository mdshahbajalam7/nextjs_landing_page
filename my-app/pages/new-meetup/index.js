import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetups = (entermeetupdate) => {
    console.log(entermeetupdate);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetups} />
    </div>
  );
}
