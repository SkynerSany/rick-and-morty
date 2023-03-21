import './form.scss';

export default function Form(): JSX.Element {
  return (
    <form className="form">
      <div className="form-wrapper">
        <input type="text" className="form__name" />
        <div className="form__two-columns">
          <input type="date" className="form__birthday" />
          <input type="text" className="form__dropdawn" />
          <div className="form__switcher">
            <input type="checkbox" className="switcher" />
            <div className="knobs"></div>
          </div>
        </div>
        <input type="file" className="form__file" />
        <div className="checkbox">
        <label htmlFor="checkbox1" className='checkbox__row'>
          <input type="checkbox" className="form__radio" id='checkbox1' />
          test 1
        </label>
        <label htmlFor="checkbox2" className='checkbox__row'>
          <input type="checkbox" className="form__radio" id='checkbox2' />
          test 2
        </label>
        <label htmlFor="checkbox3" className='checkbox__row'>
          <input type="checkbox" className="form__radio" id='checkbox3' />
          test 3
        </label>
        </div>
        <button className='form-submit'>Submit</button>
      </div>
    </form>
  );
}
