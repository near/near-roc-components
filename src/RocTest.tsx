import RocChildTest from "./RocChildTest";
import s from "./RocTest.module.css";

type Props = {
  foobar?: string; // An example of reading an injected URL query param
};

function RocTest({ foobar }: Props) {
  return (
    <div className={s.wrapper}>
      <h1>This is a test</h1>
      <p>
        Here is the URL query param value of foobar:{" "}
        <b>{typeof foobar === "undefined" ? "missing (undefined)" : foobar === "" ? "empty string" : foobar}</b>
      </p>
      <RocChildTest message="hello world!" />
    </div>
  );
}

export default RocTest as BWEComponent;
