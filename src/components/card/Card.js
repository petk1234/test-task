function Card({ user }) {
  return (
    <li>
      <img src={user.photo} alt="" />
      <p>{user.name}</p>
      <p>{user.position}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </li>
  );
}
export default Card;
