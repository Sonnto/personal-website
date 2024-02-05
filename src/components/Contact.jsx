export default function Contact({ data }) {
  const mailToEmail = `mailto:${data.email}`;
  return (
    <>
      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i>
          <a
            href={mailToEmail}
            aria-label="Contact Anthony via his e-mail address"
            rel="noopener"
          >
            &nbsp;&nbsp;&nbsp;{data.email}
          </a>
        </p>
      </div>
    </>
  );
}
