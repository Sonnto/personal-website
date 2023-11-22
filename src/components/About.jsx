export default function About({ data }) {
  return (
    <>
      <div className="about-content-container">
        <div className="bio">
          {data.bio.split(";").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
}
