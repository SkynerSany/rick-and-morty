import React, { Component, ReactNode, RefObject } from 'react';
import Dropdown from '../dropdown/dropdown';
import { IFormProps } from './form-interfaces';
import { getDate, submitForm } from './form-scripts';
import './form.scss';

const countryList = ['Belarus', 'Russia', 'USA', 'Italy'];

export default class Form extends Component<IFormProps> {
  name: RefObject<HTMLInputElement>;
  birthday: RefObject<HTMLInputElement>;
  form: RefObject<HTMLFormElement>;
  gender: RefObject<HTMLInputElement>;

  constructor(props: IFormProps) {
    super(props);
    this.name = React.createRef();
    this.birthday = React.createRef();
    this.form = React.createRef();
    this.gender = React.createRef();
  }

  render(): ReactNode {
    return (
      <form ref={this.form} onSubmit={(e) => submitForm(e, this.props.setForm)} className="form">
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
          <input type="file" className="form__file" required />
          <button className="form-submit">Submit</button>
        </div>
      </form>
    );
  }
}