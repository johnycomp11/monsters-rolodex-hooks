import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    //Gets monster pictures from external site, adds name and email to monster container
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
