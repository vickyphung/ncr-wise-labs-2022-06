
export default function EmployeeListItem(props) {
  console.log(props)
  return (
    <div className="item">

    <div className="pfp">

        <img src={props.img} className="cardImage" alt={props.alt}  />

      </div>

    <div className="info">
        <p><span className="name">{props.name}</span><br />
        {props.role}</p>
    </div>

    
    </div>
  );
}
