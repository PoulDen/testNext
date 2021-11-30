import styles from "../styles/Home.module.css";
import { getPost } from "./../services/postService";

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <p>Title: {post.title}</p>
      <p>Description: {post.description}</p>
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
  return {
    props: {
      post: await getPost(tail),
    },
  };
}
