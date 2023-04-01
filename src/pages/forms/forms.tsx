import { useContext, useState } from 'react';
import { v1 } from 'uuid';
import FormCard from '../../components/form-card/form-card';
import Form from '../../components/form/form';
import { IFormSubmitProps } from '../../components/form/form-interfaces';
import { AppContext } from '../../components/layout/layout';
import './forms.scss';

export default function Forms(): JSX.Element {
  const message = useContext(AppContext);
  const [forms, setForms] = useState<IFormSubmitProps[]>(JSON.parse(localStorage.forms || '[]'));

  function setForm(): void {
    setForms(JSON.parse(localStorage.forms));
    message({
      type: 'info',
      text: 'Form has been submited',
    });
  }

  document.title = 'Forms';

  return (
    <section className="forms">
      <div className="wrapper">
        <h2 className="page-title">Forms</h2>
        <Form setForm={setForm} />
        <div className="submit-forms">
          <p className="submit-forms__title">Submited forms</p>
          <div className="forms__card-wrapper">
            {forms.map((form, i) => (
              <FormCard formData={form} formNumber={i} key={v1()} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
