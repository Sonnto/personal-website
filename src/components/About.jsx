export default function About({ data }) {
  const mailToEmail = `mailto:${data.email}`;
  const telMobileNum = `tel:${data.mobileNum}`;
  const viewResume = () => {
    window.open(
      "./assets/documents/CV_HoKeeFungAnthony_Dev_FULL.pdf",
      "_blank"
    );
  };

  return (
    <>
      <div className="bio-text-wrapper">
        <h2 className="section-heading desktop-sect-heading">
          Kee-Fung
          <span className="next-line">Anthony Ho</span>
        </h2>
        <div className="about-content-container">
          <div className="profile-pic-item">
            <img
              className="profile-pic"
              src="./assets/images/profile/anthony-side-profile.jpg"
              alt="Headshot of Kee-Fung Anthony Ho"
            />
          </div>
          <div className="bio-text-wrapper">
            <h2 className="section-heading mobile-sect-heading">
              Kee-Fung <span className="next-line">Anthony Ho</span>
            </h2>
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
              <button className="resume-button" onClick={viewResume}>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
