import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import authOperations from "../../redux/auth/authOperations";
import { Fragment } from "react";
import styles from "./radioStyles.module.scss";
function RadioButtons(props) {
  const [currPosition, setCurrPosition] = useState();
  const positions = useSelector((state) => state.usersInfo.positions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getPositions());
  }, []);

  const handlePosition = (e) => {
    let [{ id, name }] = positions.filter(
      (position) => position.name === e.target.value && position
    );
    setCurrPosition(e.target.value);
    props.outsideOnPosition(id, e.target.value);
  };

  return (
    <>
      {positions[0] !== undefined && (
        <>
          {positions.map((position, i) => (
            <Fragment key={position.id}>
              <input
                className={styles.radio}
                type="radio"
                value={position.name}
                onChange={handlePosition}
                checked={currPosition === positions[i].name}
              />
              <label>{positions[i].name}</label>
            </Fragment>
          ))}
        </>
      )}
    </>
  );
}
export default RadioButtons;
