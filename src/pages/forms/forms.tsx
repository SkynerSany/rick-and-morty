import { Component, ReactNode, ReactPropTypes } from 'react';
import { v1 } from 'uuid';
import FormCard from '../../components/form-card/form-card';
import Form from '../../components/form/form';
import { IForm } from '../../components/form/form-interfaces';
import './forms.scss';

export default class Forms extends Component<ReactPropTypes, { forms: IForm[] }> {
  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      forms: JSON.parse(localStorage.forms || '[]'),
    };
    this.setForm = this.setForm.bind(this);
  }

  setForm() {
    this.setState({ forms: JSON.parse(localStorage.forms) });
  }

  render(): ReactNode {
    document.title = 'Forms';

    return (
      <section className="forms">
        <div className="wrapper">
          <h2 className="page-title">Forms</h2>
          <Form setForm={this.setForm} />
          <p className="submit-forms__title">Submited forms</p>
          <div className="cards">
            {this.state.forms.map((form, i) => (
              <FormCard formData={form} formNumber={i} key={v1()} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
