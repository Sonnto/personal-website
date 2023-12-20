export default function Contact({ data }) {
  const mailToEmail = `mailto:${data.email}`;
  const telMobileNum = `tel:${data.mobileNum}`;
  const viewCV = () => {
    window.open("./assets/documents/CV_HoKeeFungAnthony.pdf", "_blank");
  };
  return (
    <>
      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i>
          <a
            href={mailToEmail}
            aria-label="E-mail Anthony via his e-mail address"
            rel="noopener"
          >
            &nbsp;&nbsp;&nbsp;{data.email}
          </a>
        </p>
        <p>
          <i className="fas fa-mobile-alt"></i>
          <a
            href={telMobileNum}
            aria-label="Call Anthony via his mobile phone number"
            rel="noopener"
          >
            &nbsp;&nbsp;&nbsp;{data.mobileNum}
          </a>
        </p>
        <div className="cv-button-container">
          <button
            className="cv-button"
            aria-label="View Anthony's CV in a new tab"
            onClick={viewCV}
          >
            View CV
          </button>
        </div>
      </div>
    </>
  );
}
