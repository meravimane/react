function Card(props) {
    const {name, location} = props;
    return (
        <div className="card">
          <h2>Name : { name || "Raj"}</h2>
          <h3>Location: { location || "Mumbai" }</h3>
          <h4>In function</h4>
        </div>
    )
}

export default Card;