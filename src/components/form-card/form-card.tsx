import { IForm } from '../form/form-interfaces';
import './form-card.scss';

interface IFormCardProps {
  formData: IForm;
  formNumber: number;
}

export default function FormCard({ formData, formNumber }: IFormCardProps): JSX.Element {
  return (
    <article className="form-card">
      <div className="form-card-wrapper">
        <h3 className="form-card__number">{formNumber + 1}</h3>
        <div className="form-card__wrapper">
          <div
            className="form-card__image"
            style={{ backgroundImage: `url(${formData.image})` }}
          ></div>
          <p className="form-card__text">Name: {formData.name}</p>
          <p className="form-card__text">Birthday: {formData.birthday}</p>
          <p className="form-card__text">Country: {formData.country}</p>
          <p className="form-card__text">Gender: {formData.gender}</p>
          <p className="form-card__text">Heard from: {formData.heard.join(', ')}</p>
        </div>
      </div>
    </article>
  );
}
