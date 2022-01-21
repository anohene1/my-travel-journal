function Card(props) {
    return (
        <div className='card'>
            <img src={`images/${props.item.imageURL}`} alt={props.item.title} className="card--image"/>
            <div className="card--details">
                <div className="row">
                    <img src="images/location-icon.svg" alt="location-icon" className='location-icon'/>
                    <span className="location">{props.item.location}</span>
                    <a href={props.item.googleMapsURL} className="cta">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="date">{`${props.item.startDate} - ${props.item.endDate}`}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    );
}

export default Card;