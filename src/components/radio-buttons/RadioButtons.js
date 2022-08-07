import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import authOperations from "../../redux/auth/authOperations";
import styles from "./radioButtonsStyles.module.scss";
function RadioButtons(props) {
  const positions = useSelector((state) => state.usersInfo.positions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getPositions());
  }, []);

  const handlePosition = (e) => {
    let [{ id, name }] = positions.filter(
      (position) => position.name === e.target.value && position
    );
    props.outsideOnPosition(id, e.target.value);
  };

  return (
    <>
      <p className={styles.signUpSection__title}>Select your position</p>
      {positions[0] !== undefined && (
        <ul className={styles.signUpSection__radioButtonsList}>
          {positions.map((position, i) => (
            <li className={styles.signUpSection__item} key={position.id}>
              <input
                className={styles.signUpSection__radioButton}
                type="radio"
                name="positions"
                value={position.name}
                onChange={handlePosition}
                id={position.name}
                required
              />
              <label
                className={styles.signUpSection__position}
                htmlFor={position.name}
              >
                {positions[i].name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default RadioButtons;
