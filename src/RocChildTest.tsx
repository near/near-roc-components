import s from "./RocTest.module.css";

type Props = {
  message?: string;
};

function RocChildTest({ message = "default message" }: Props) {
  return (
    <div className={s.wrapper}>
      <p>This is a child component. Here is the message prop: {message}</p>
    </div>
  );
}

export default RocChildTest as BWEComponent<Props>;
