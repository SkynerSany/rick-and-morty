import { Component, RefObject } from 'react';

export default class InputCheckbox extends Component<{
  inputRef: RefObject<HTMLInputElement>;
  name: string;
}> {
  constructor(props: { inputRef: RefObject<HTMLInputElement>; name: string }) {
    super(props);
  }

  render() {
    return (
      <label className="checkbox__row">
        <input
          ref={this.props.inputRef}
          type="radio"
          name="heard"
          className="form__radio"
          data-heard={this.props.name}
        />
        {this.props.name}
      </label>
    );
  }
}
