import React, { Component } from "react";
import { Button, Input, Textarea } from "../../utils/utils";
import "./TattooForm.css";

export default class TattooForm extends Component {
  state = { error: null };

  handleSubmitTattoo = ev => {
    console.log("handle submit tattoo");
  };

  render() {
    const { error } = this.state;
    return (
      <form className="TattooForm" onSubmit={this.handleSubmitTattoo}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="client_name">
          <label htmlFor="TattooForm__client_name">Client's Full Name</label>
          <Input
            required
            name="client_name"
            id="TattooForm__client_name"
          ></Input>
        </div>
        <div className="tattoo_title">
          <label htmlFor="TattooForm_title">Title For Tattoo</label>
          <Input required name="tattoo_title" id="TattooForm_title"></Input>
        </div>
        <div className="tattoo_location">
          <label htmlFor="TattooForm_location">Location Of Tattoo</label>
          <Input name="tattoo_location" id="TattooForm_location"></Input>
        </div>
        <div className="tattoo_info">
          <label htmlFor="TattooForm_info">Description</label>
          <Textarea name="tattoo_info" id="TattooForm_info"></Textarea>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
