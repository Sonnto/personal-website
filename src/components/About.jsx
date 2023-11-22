export default function About({ data }) {
  const mailToEmail = `mailto:${data.email}`;
  const telMobileNum = `tel:${data.mobileNum}`;
  const viewCV = () => {
    window.open(
      "./assets/documents/CV_HoKeeFungAnthony_Dev_FULL.pdf",
      "_blank"
    );
  };

  return (
    <>
      <h2 className="section-heading">About</h2>
      <div className="about-content-container">
        <div className="bio">
          <p>{data.bio}</p>
        </div>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i>
            <a
              href={mailToEmail}
              aria-label="Click to e-mail Anthony"
              rel="noopener"
            >
              &nbsp;&nbsp;&nbsp;{data.email}
            </a>
          </p>
          <p>
            <i className="fas fa-mobile-alt"></i>
            <a
              href={telMobileNum}
              aria-label="Click to call Anthony via his mobile phone number"
              rel="noopener"
            >
              &nbsp;&nbsp;&nbsp;{data.mobileNum}
            </a>
          </p>
          <button className="cv-button" onClick={viewCV}>
            View CV
          </button>
        </div>
      </div>
    </>
  );
}
