import pic from "./assets/profile.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-img" src={pic} alt="Profile pic" />
      <h2 className="card-title">Sri Kesavan</h2>
      <p className="card-text">I am studying in school</p>
    </div>
  );
}
export default Card;
