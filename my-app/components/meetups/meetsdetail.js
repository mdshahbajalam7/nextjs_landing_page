import { Fragment } from "react";
import clasess from "../meetups/meetupdetails.module.css";
export default function MeetsUpDetails(props) {
  // console.log(props);
  return (
    <Fragment>
      <section className={clasess.details}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </Fragment>
  );
}
