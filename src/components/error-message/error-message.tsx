import './error-message.scss';

export default function ErrorMessage({ errorText }: { errorText: string }) {
  return (
    <div className="error-message center-loc">
      <p className="error-message__text">{errorText}</p>
    </div>
  );
}
