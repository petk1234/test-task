import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import Card from "../card/Card";
import Preloader from "../loader/Preloader";
import styles from "./listCardsStyles.module.scss";
function ListCards() {
  const [shouldUpdate, setUpdate] = useState(false);
  const [users, page, isLoading] = useSelector((state) => [
    state.usersInfo.users,
    state.usersInfo.page,
    state.usersInfo.isLoading,
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
    <section className={styles.usersSection}>
      <div className={styles.usersSection__container}>
        <h1 className={styles.usersSection__title}>Working with GET request</h1>
        <ul className={styles.usersSection__list} id="users">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </ul>
        {!isLoading ? (
          <>
            {page !== 0 && (
              <button
                className={styles.usersSection__button}
                onClick={loadMoreUsers}
              >
                Show more
              </button>
            )}
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </section>
  );
}
export default ListCards;
