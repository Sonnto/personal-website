export default function Home() {
  return (
    <>
      <div className="profile-image-item">
        <img
          className="profile-image"
          src="./assets/images/profile/anthony-side-profile.jpg"
          alt="Headshot of Anthony"
        />
      </div>
      <div className="subtext">
        <p>Political Scientist </p>
        <p>Legal Professional</p>
        <p>Web Developer</p>
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/sonnto"
          aria-label="Click for Anthony's GitHub account"
          rel="noopener"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://linkedin.com/in/anthonykfho"
          aria-label="Click for Anthony's LinkedIn account"
          rel="noopener"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://x.com/anthonykfho"
          aria-label="Click for Anthony's X account"
          rel="noopener"
        >
          <i className="fab fa-square-x-twitter"></i>
        </a>
      </div>
    </>
  );
}
