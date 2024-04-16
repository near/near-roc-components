import RocChildTest from "./RocChildTest";
import s from "./RocTest.module.css";

function RocTest() {
  return (
    <div className={s.wrapper}>
      <h1>This is a test</h1>
      <RocChildTest message="hello world!" />
    </div>
  );
}

export default RocTest as BWEComponent;
