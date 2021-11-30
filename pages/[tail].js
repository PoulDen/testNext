import styles from "../styles/Home.module.css";
import { getPost } from "./services/postService";

export default function Post({ data }) {
  return (
    <div className={styles.container}>
      <p>Title: {data.title}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps({ params: { tail } }) {
  const getPosts = await getPost(tail);
  return {
    props: {
      data: getPosts[0],
    },
  };
}
