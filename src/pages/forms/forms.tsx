import { useSelector } from 'react-redux';
import { v1 } from 'uuid';
import FormCard from '../../components/form-card/form-card';
import Form from '../../components/form/form';
import { RootState } from '../../redux/store';
import './forms.scss';

export default function Forms(): JSX.Element {
  const forms = useSelector((state: RootState) => state.store.forms);

  return (
    <section className="forms">
      <div className="wrapper">
        <h2 className="page-title">Forms</h2>
        <Form />
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
