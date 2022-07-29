import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import Card from "../card/Card";
function ListCards() {
  const [shouldUpdate, setUpdate] = useState(false);
  const [users, page] = useSelector((state) => [
    state.usersInfo.users,
    state.usersInfo.page,
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users.length === 0) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }, [users]);

  useEffect(() => {
    if (shouldUpdate === true) {
      dispatch(authOperations.getUsers(page));
    }
  }, [shouldUpdate]);

  const loadMoreUsers = () => {
    dispatch(authOperations.getUsers(page));
  };

  return (
    <>
      <ul id="users">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
      {page !== 0 && <button onClick={loadMoreUsers}>More users</button>}
    </>
  );
}
export default ListCards;
