import Card from "./Card";
import data from "../data";

function Cards() {
    const cards = data.map(card => <Card item={card} />)
    return (
        <div className='cards'>
            {cards}
        </div>
    );
}

export default Cards;