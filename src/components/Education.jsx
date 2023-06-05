export default function Education({ data }) {
  return (
    <>
      <div className="institute-card">
        <img
          className="institute-emblem"
          src={data.image}
          alt={`Emblem of ${data.institute}.`}
        />
        <h2 className="institute-name">{data.institute}</h2>
      </div>
    </>
  );
}
