import { Component, ReactNode } from 'react';
import { v1 } from 'uuid';
import FormCard from '../../components/form-card/form-card';
import Form from '../../components/form/form';
import { AppContext } from '../../components/layout/layout';
import { IFormsState } from './forms-interfaces';
import './forms.scss';

export default class Forms extends Component<Record<string, never>, IFormsState> {
  static contextType = AppContext;
  declare context: React.ContextType<typeof AppContext>;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      forms: JSON.parse(localStorage.forms || '[]'),
    };
    this.setForm = this.setForm.bind(this);
  }

  setForm(): void {
    this.setState({ forms: JSON.parse(localStorage.forms) });
    this.context({
      type: 'info',
      text: 'Form has been submited',
    });
  }

  render(): ReactNode {
    document.title = 'Forms';

    return (
      <section className="forms">
        <div className="wrapper">
          <h2 className="page-title">Forms</h2>
          <Form setForm={this.setForm} />
          <div className="submit-forms">
            <p className="submit-forms__title">Submited forms</p>
            <div className="forms__card-wrapper">
              {this.state.forms.map((form, i) => (
                <FormCard formData={form} formNumber={i} key={v1()} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
