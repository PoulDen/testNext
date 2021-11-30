import { useQuery } from "@apollo/client";
import { GET_LONG_TAILS } from "./../query/TailQuery";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { data } = useQuery(GET_LONG_TAILS);
  if (!data)
    return (
      <div className={styles.container}>
        <p>"loading"</p>
      </div>
    );
  return (
    <div className={styles.container}>
      {data.long_tails.map((i) => {
        return (
          <div className={styles.link} key={i.id}>
            <a href={`/${i.tail}`}>&#10132;{i.tail}</a>
          </div>
        );
      })}
    </div>
  );
}
