import React, { Component, ReactNode, RefObject } from 'react';
import Dropdown from '../dropdown/dropdown';
import { IForm, IFormProps } from './form-interfaces';
import './form.scss';

const countryList = ['Belarus', 'Russia', 'USA', 'Italy'];

function getDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default class Form extends Component<IFormProps> {
  name: RefObject<HTMLInputElement>;
  birthday: RefObject<HTMLInputElement>;
  form: RefObject<HTMLFormElement>;
  gender: RefObject<HTMLInputElement>;
  country: RefObject<HTMLInputElement>;
  image: RefObject<HTMLInputElement>;
  heard: {
    youtube: RefObject<HTMLInputElement>;
    yandex: RefObject<HTMLInputElement>;
    google: RefObject<HTMLInputElement>;
  };

  constructor(props: IFormProps) {
    super(props);
    this.form = React.createRef();
    this.name = React.createRef();
    this.birthday = React.createRef();
    this.gender = React.createRef();
    this.country = React.createRef();
    this.image = React.createRef();
    this.heard = {
      youtube: React.createRef(),
      yandex: React.createRef(),
      google: React.createRef(),
    };
  }

  saveForm(): IForm {
    const heard: string[] = Object.values(this.heard)
      .map((input) => input.current)
      .filter((input) => input?.checked)
      .map((input) => input?.dataset.heard || '');

    return {
      name: this.name.current?.value || '',
      birthday: this.birthday.current?.value || '',
      country: this.country.current?.value || '',
      gender: this.gender.current?.checked ? 'Female' : 'Male',
      heard: heard,
      image: URL.createObjectURL(this.image.current!.files![0]),
    };
  }

  submitForm(event: React.FormEvent): void {
    event.preventDefault();

    const newForm = this.saveForm();
    if (localStorage.forms) {
      localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), newForm]);
    } else {
      localStorage.setItem('forms', JSON.stringify([newForm]));
    }

    this.props.setForm();
    this.form.current?.reset();
  }

  render(): ReactNode {
    return (
      <form ref={this.form} onSubmit={(e) => this.submitForm(e)} className="form">
        <div className="form-wrapper">
          <label className="input-label">
            Your name
            <input
              ref={this.name}
              type="text"
              className="form__name"
              pattern="[A-Z\u0410-\u042f]{1}[a-z\u0430-\u044f]+\s[A-Z\u0410-\u042f]{1}[a-z\u0430-\u044f]{1,}"
              title="First name and last name must start with a capital letter, last name contains more than two characters."
              required
            />
          </label>
          <div className="form__two-columns">
            <label className="input-label">
              Your birthday
              <input
                ref={this.birthday}
                type="date"
                className="form__birthday"
                min="1940-03-23"
                max={getDate()}
                defaultValue={getDate()}
                required
              />
            </label>
            <label className="input-label">
              Your country
              <Dropdown dropdownList={countryList} dropdownRef={this.country} />
            </label>
            <div className="form__switcher">
              <input type="checkbox" className="switcher" />
              <div className="knobs"></div>
            </div>
          </div>
          <fieldset className="checkbox">
            <legend>Where you heard about us</legend>
            <label className="checkbox__row">
              <input
                ref={this.heard.youtube}
                type="checkbox"
                className="form__radio"
                data-heard="YouTube"
              />
              YouTube
            </label>
            <label className="checkbox__row">
              <input
                ref={this.heard.yandex}
                type="checkbox"
                className="form__radio"
                data-heard="Yandex"
              />
              Yandex
            </label>
            <label className="checkbox__row">
              <input
                ref={this.heard.google}
                type="checkbox"
                className="form__radio"
                data-heard="Google"
              />
              Google
            </label>
          </fieldset>
          <input ref={this.image} type="file" className="form__file" accept="image/*" required />
          <button className="form-submit">Submit</button>
          <label className="checkbox__accept">
            <input type="checkbox" className="form__radio" required />I confirm that I am a cute cat
          </label>
        </div>
      </form>
    );
  }
}
