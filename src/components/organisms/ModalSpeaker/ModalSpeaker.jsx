import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../molecules/TextArea";
import { Upload } from "../../molecules/Upload";

export function ModalSpeaker() {
  return (
    <div className="ModalSpeaker">
      <h2>Your Conferencist</h2>
      <form className="ModalSpeaker__Form" action="">
        <Input type="text" placeholder="Conferencist Name" />
        <TextArea idName="Conferencist" />
        <Input type="text" placeholder="Conferencist Role" />
        <Input type="url" placeholder="Twitter Url" />
        <div>
            <p>Conferencist Photo</p>
            <Upload buttonText="Upload Image" photoSize="150px x 150px"/>
        </div>
        <div className="ModalSpeaker__Form__Btn">
          <Button text="Save Changes" type="primary" color="first" />
          <a>Discard Changes</a>
          <a>Delete Conferencist</a>
        </div>
      </form>
    </div>
  );
}
