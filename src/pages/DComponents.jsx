import React from "react";

import { Button } from "../components/atoms";
import { ButtonList, InfoButtons } from "../components/molecules";
import {
  Header,
  EventFooter,
  Footer,
  Login,
  SignUp,
  ConferenceCard,
} from "../components/organisms";

export function DComponents() {
  return (
    <>
      <div>
        <ConferenceCard
          sessionTitle="la de hoy"
          date="03/11/2020"
          duration=" 90 min"
          // description="Lorem ipsum dolor sit amet, "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magnis lacus blandit tincidunt. At posuere ornare tristique tincidunt. Arcu faucibus eu sed viverra dictum sagittis, lacus, massa sed. Dolor pulvinar ipsum consequat, in at est nullam diam lacus. Lectus vitae felis amet tortor tortor in proin mauris. Ultrices quisque sit ridiculus ut at ultricies egestas enim amet. Tristique et aliquam dui eleifend lobortis"
          BottomBtn="Dennis Allan Velez Quintanar"
          colortBottonBtn="second"
        />
      </div>
      {/* <Header />>
      <div>
        <Login />
      </div> */}
      {/* <div>
        <SignUp />
      </div> */}
      {/* <p>
        <Register />
      </p> */}
      {/* <Header />
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      <br></br>
      <br></br>
      <br></br>
      <EventFooter />; */}
    </>
  );
}
