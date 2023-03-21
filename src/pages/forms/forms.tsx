import { Component, ReactNode, ReactPropTypes } from 'react';
import FormCard from '../../components/form-card/form-card';
import Form from '../../components/form/form';
import './forms.scss';

export default class Forms extends Component {
  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    document.title = 'Forms';

    return (
      <section className="forms">
        <div className="wrapper">
          <h2 className="page-title">Forms</h2>
          <Form />
          <div className="cards">
            <FormCard />
            <FormCard />
            <FormCard />
          </div>
        </div>
      </section>
    );
  }
}
