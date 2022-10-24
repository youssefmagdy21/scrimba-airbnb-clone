import Card from "./Card";
import CardsData from "./CardsData";

function CardContainer() {
  const CardsInfo = CardsData.map((card) => {
    return (
      <Card
        key={card.id}
        // card={card} >> {card:{data}}
        {...card} // >> {data}
        // img={card.img}
        // rating={card.rating}
        // reviewCount={card.reviewCount}
        // country={card.country}
        // title={card.title}
        // price={card.price}
        // location={card.location}
        // openSpots={card.openSpots}
      />
    );
  });

  return (
    <section className=" flex px-9 my-12 gap-5 flex-nowrap overflow-x-auto">
      {CardsInfo}
    </section>
  );
}

export default CardContainer;
