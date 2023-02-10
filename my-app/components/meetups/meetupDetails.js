export default function MeetupDetails(props) {
  <Fragment>
    <img src={props.image} alt="" />
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p>
  </Fragment>;
}
