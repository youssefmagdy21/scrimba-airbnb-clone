import StarIcon from "../assets/star-icon.png";

function Card(props) {
  let { img, rating, reviewCount, country, title, location, openSpots, price } =
    props; // {...card} >> {data}
  // props.card; // card={card} >> {card: {data}}

  let badgeText = "";
  if (openSpots === 0) {
    badgeText = "sold out";
  } else if (location === "Online") {
    badgeText = "online";
  }

  return (
    <div className=" flex flex-col gap-2 text-contentPrimary font-light flex-grow-0 flex-shrink-0 basis-auto w-44">
      <div className="relative">
        {badgeText && (
          <div className=" text-[10px] bg-white py-1  text-center rounded-sm w-16 absolute top-2 left-2 uppercase font-normal">
            {badgeText}
          </div>
        )}
        <img src={"./src/assets/" + img} alt="" className=" w-full" />
      </div>
      <div className=" flex flex-col gap-2 text-xs">
        <div className="flex gap-1 items-center justify-start">
          <img src={StarIcon} alt="" className=" w-[14px]" />
          <span>{rating}</span>
          <span className=" text-contentSecondary">
            ({reviewCount}) • {country}
          </span>
        </div>
        <p className=" overflow-hidden text-ellipsis">{title}</p>
        <p>
          <span className=" font-semibold">From ${price} </span>/ person
        </p>
      </div>
    </div>
  );
}

export default Card;
