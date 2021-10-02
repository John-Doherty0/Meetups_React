import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      // **** Insert Firebase Database URL here ***
      "https://react-meetups-project-1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <div>
        <h1>New Meetups Page</h1>
      </div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupsPage;
