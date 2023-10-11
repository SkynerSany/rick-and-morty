import './footer.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer center-loc">
      <div className="wrapper">
        <a className="footer__link" href="https://app.rs.school/" target="_blank" rel="noreferrer">
          RS School
        </a>
        <a
          className="footer__link"
          href="https://github.com/SkynerSany"
          target="_blank"
          rel="noreferrer"
        >
          My Github
        </a>
      </div>
    </footer>
  );
}
