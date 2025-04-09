import { useParams } from "react-router-dom";
import { Card } from "antd";
import { useEffect, useState } from "react";
import styles from "../styles/router-test.module.scss";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

const RouterTestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const links = [
    { to: "/router-test/1", label: "ID:1" },
    { to: "/router-test/2", label: "ID:2" },
    { to: "/router-test/3", label: "ID:3" }
  ];
  useEffect(() => {
    if (id) {
      setPost(null);
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data: Post) => {
          setTimeout(() => {
            setPost(data);
          }, 1000);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);
  if (!id) {
    return (
      <Card title="Invalid ID" className={styles["card"]}>
        {links.map((link, index) => (
          <Link key={index} to={link.to} className={styles["link-button"]}>
            {link.label}
          </Link>
        ))}
      </Card>
    );
  }
  return (
    <>
      <Card title={`This is the ID I got ${id}`} className={styles["card"]}>
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          <div className={styles["loading"]}>Loading...</div>
        )}
        {links.map((link, index) => (
          <Link key={index} to={link.to} className={styles["link-button"]}>
            {link.label}
          </Link>
        ))}
      </Card>
    </>
  );
};
export default RouterTestPage;
