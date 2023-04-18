import './error-page.scss';

export default function ErrorPage(): JSX.Element {
  return (
    <div className="error-page">
      <div className="wrapper center-loc">
        <div className="error-page__container center-loc">
          <h1 className="error-page__title">404</h1>
          <p className="error-page__desc">Sorry, page is not found</p>
        </div>
      </div>
    </div>
  );
}
