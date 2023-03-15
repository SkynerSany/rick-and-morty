import './about.scss';

export default function About(): JSX.Element {
  document.title = 'About Us';

  return (
    <section className="about">
      <div className="wrapper">
        <h2 className="page-title">About Us</h2>
      </div>
    </section>
  );
}
