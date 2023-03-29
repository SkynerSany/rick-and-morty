import React, { Component, ReactNode, RefObject } from 'react';
import { v1 } from 'uuid';
import Dropdown from '../dropdown/dropdown';
import { IForm, IFormProps, IFormState } from './form-interfaces';
import './form.scss';
import InputCheckbox from './input-checkbox';
import { validateInput } from './inputs-validation';

const COUNTRY_LIST = ['Belarus', 'Russia', 'USA', 'Italy'];
const CITES_LIST = ['yandex', 'google', 'youtube'];

export function getDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default class Form extends Component<IFormProps, IFormState> {
  name: RefObject<HTMLInputElement>;
  birthday: RefObject<HTMLInputElement>;
  form: RefObject<HTMLFormElement>;
  gender: RefObject<HTMLInputElement>;
  country: RefObject<HTMLInputElement>;
  image: RefObject<HTMLInputElement>;
  accept: RefObject<HTMLInputElement>;
  heard: {
    [key: string]: RefObject<HTMLInputElement>;
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
    this.accept = React.createRef();
    this.heard = {
      youtube: React.createRef(),
      yandex: React.createRef(),
      google: React.createRef(),
    };
    this.state = {
      name: true,
      birthday: true,
      country: true,
      heard: true,
      image: true,
      accept: true,
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
    this.setState({
      name: true,
      birthday: true,
      country: true,
      heard: true,
      image: true,
      accept: true,
    });
    if (!this.validateForm()) return;

    const newForm = this.saveForm();
    if (localStorage.forms) {
      localStorage.forms = JSON.stringify([...JSON.parse(localStorage.forms), newForm]);
    } else {
      localStorage.setItem('forms', JSON.stringify([newForm]));
    }

    this.props.setForm();
    this.form.current?.reset();
  }

  validateForm(): boolean {
    const errors = {
      name: validateInput.name(this.name),
      birthday: validateInput.birthday(this.birthday),
      country: validateInput.country(this.country),
      heard: validateInput.heard(Object.values(this.heard)),
      image: validateInput.file(this.image),
      accept: validateInput.accept(this.accept),
    };

    this.setState(errors);
    return Object.values(errors).filter((error) => error === false).length > 0 ? false : true;
  }

  render(): ReactNode {
    return (
      <form ref={this.form} onSubmit={(e) => this.submitForm(e)} className="form">
        <div className="form-wrapper">
          <div className="input__wrapper">
            <label className="input-label">
              Your name
              <input ref={this.name} type="text" className="form__name" />
            </label>
            {this.state.name || (
              <p className="input-error">
                First name and last name must start with a capital letter, last name contains more
                than two characters.
              </p>
            )}
          </div>
          <div className="form__two-columns">
            <div className="input__wrapper">
              <label className="input-label">
                Your birthday
                <input ref={this.birthday} type="date" className="form__birthday" />
              </label>
              {this.state.birthday || (
                <p className="input-error">Date of birth cannot be greater than the current date</p>
              )}
            </div>
            <div className="input__wrapper">
              <label className="input-label">
                Your country
                <Dropdown dropdownList={COUNTRY_LIST} dropdownRef={this.country} />
              </label>
              {this.state.country || <p className="input-error">Select one country</p>}
            </div>
            <div className="input__wrapper">
              <label className="input-label">
                Gender
                <div className="form__switcher">
                  <input type="checkbox" className="switcher" />
                  <div className="knobs"></div>
                </div>
              </label>
            </div>
          </div>
          <fieldset className="checkbox input__wrapper">
            <legend>Where you heard about us</legend>
            {CITES_LIST.map((cite) => (
              <InputCheckbox inputRef={this.heard[cite]} name={cite} key={v1()} />
            ))}
            {this.state.heard || <p className="input-error">Select at least one source</p>}
          </fieldset>
          <div className="input__wrapper">
            <input ref={this.image} type="file" className="form__file" accept="image/*" />
            {this.state.image || <p className="input-error">You can load only images</p>}
          </div>
          <button className="form-submit">Submit</button>
          <div className="input__wrapper">
            <label className="checkbox__accept">
              <input
                ref={this.accept}
                type="checkbox"
                className="form__radio"
                defaultChecked={true}
              />
              I confirm that I am a cute cat
            </label>
            {this.state.accept || <p className="input-error">You must agree</p>}
          </div>
        </div>
      </form>
    );
  }
}
