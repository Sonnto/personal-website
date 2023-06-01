function Education({ data }) {
    return (
        <>
            <h3 className="experience-name">{data.institute}</h3>
            <h4>{data.location}</h4>
            <h4>
                {new Date(data.started_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                })}
                {data.ended_at
                    ? ` - ${new Date(data.ended_at).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "numeric" }
                      )}`
                    : " - Present"}
            </h4>
            <h4>{data.qualification}</h4>
            <ul>
                {data.content.split(";").map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </>
    );
}

export default Education;
