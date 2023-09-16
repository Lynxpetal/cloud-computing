import "styles/staff-directory.scss";

export default function StaffItem({
  count,
  name,
  collageTitle,
  position,
  faculty,
  qualifications,
  email,
  specialization,
  interest,
  image
}) {
  return (
    <tr className="tableRow">
      <td width="30">&nbsp;{count}</td>
      <td width="115" className="imageRow">
        <div className="shadow">
          <div className="imageFrameOuter">
            <div className="imageFrameInner">
              <img
                className="staffImage"
                alt={name}
                src={image}
              />
            </div>
          </div>
        </div>
      </td>
      <td width="20">&nbsp;</td>
      <td>
        <div>
          <strong>{name}</strong>
        </div>
        <div>
          {/* <b>Collage Title: </b> */}
          <strong className="blue">{collageTitle}</strong>
        </div>
        <div>
          {/* <b>Position: </b> */}
          <strong className="blue">{position}</strong>
        </div>
        <div>
          <small>
            <b>Division: </b>{faculty}
          </small>
        </div>

        <div>
          <small>
            <b>Qualification: </b>{qualifications}
          </small>
        </div>
        <div>
          <small>
            <b>Email: </b>{email}
          </small>
        </div>

        <div>
          <small>
            <b>Major of Study/Specialization: </b>  {specialization}
          </small>
        </div>
        <div>
          <small>
            <b>Area of Interest: </b> {interest}
          </small>
        </div>
      </td>
    </tr>
  );
}
