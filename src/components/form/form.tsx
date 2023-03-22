import React, { Component, ReactNode, RefObject } from 'react';
import Dropdown from '../dropdown/dropdown';
import { IForm } from './form-interfaces';
import './form.scss';

const countryList = ['Belarus', 'Russia', 'USA', 'Italy'];

export default class Form extends Component<{ setForm: () => void }> {
  name: RefObject<HTMLInputElement>;
  birthday: RefObject<HTMLInputElement>;
  form: RefObject<HTMLFormElement>;
  gender: RefObject<HTMLInputElement>;

  constructor(props: { setForm: () => void }) {
    super(props);
    this.name = React.createRef();
    this.birthday = React.createRef();
    this.form = React.createRef();
    this.gender = React.createRef();
  }

  saveForm(): IForm | void {
    if (!(this.form.current instanceof HTMLFormElement)) return;
    const inputs = Array.from(this.form.current.elements) as HTMLInputElement[];
    const heardInputs = Array.from(inputs[4].querySelectorAll('input'));
    const heard: string[] = heardInputs
      .filter((input) => input.checked)
      .map((input) => input.dataset.heard || '');

    return {
      name: inputs[0].value,
      birthday: inputs[1].value,
      country: inputs[2].value,
      gender: inputs[3].checked ? 'Female' : 'Male',
      heard: heard,
    };
  }

  submitForm(event: React.FormEvent) {
    event.preventDefault();
    const newForm = this.saveForm();
    if (localStorage.forms) {
      localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), newForm]);
    } else {
      localStorage.forms = JSON.stringify([newForm]);
    }

    this.props.setForm();
  }

  render(): ReactNode {
    return (
      <form ref={this.form} onSubmit={(e) => this.submitForm(e)} className="form">
        <div className="form-wrapper">
          <label className="input-label">
            Your name
            <input ref={this.name} type="text" className="form__name" />
          </label>
          <div className="form__two-columns">
            <label className="input-label">
              Your birthday
              <input ref={this.birthday} type="date" className="form__birthday" />
            </label>
            <label className="input-label">
              Your country
              <Dropdown dropdownList={countryList} />
            </label>
            <div className="form__switcher">
              <input type="checkbox" className="switcher" />
              <div className="knobs"></div>
            </div>
          </div>
          <fieldset className="checkbox">
            <legend>Where you heard about us</legend>
            <label className="checkbox__row">
              <input type="checkbox" className="form__radio" data-heard="YouTube" />
              YouTube
            </label>
            <label className="checkbox__row">
              <input type="checkbox" className="form__radio" data-heard="Yandex" />
              Yandex
            </label>
            <label className="checkbox__row">
              <input type="checkbox" className="form__radio" data-heard="Google" />
              Google
            </label>
          </fieldset>
          <input type="file" className="form__file" />
          <button className="form-submit">Submit</button>
        </div>
      </form>
    );
  }
}
