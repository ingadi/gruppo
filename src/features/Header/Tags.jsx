import { useEffect } from "react";
import { useState } from "react";
import {
  query,
  collection,
  orderBy,
  limit,
  getFirestore,
  onSnapshot,
  where,
} from "firebase/firestore";
import Toast from "../../components/Toast";
import LoadingIndicator from "../../components/LoadingIndicator";
import TagList from "./TagList";
import styles from "./Tags.module.css";

function Tags() {
  const [tagData, setTagData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    type: null,
    message: null,
  });

  useEffect(() => {
    setIsLoading(true);
    const tagsQuerySnapShot = query(
      collection(getFirestore(), "tags"),
      where("parent", "==", null),
      orderBy("title", "desc"),
      limit(12)
    );

    onSnapshot(
      tagsQuerySnapShot,
      (snapshot) => {
        const _tagData = snapshot.docChanges().map(({ doc }) => {
          return { id: doc.id, ...doc.data() };
        });
        setIsLoading(false);
        setTagData(_tagData);
      },
      (error) => {
        setNotification({
          type: "error",
          message: "Something went wrong, maybe try again?",
        });

        console.error(error);
      }
    );
  }, []);

  return (
    <section className={styles.tags}>
      <h3>My tags</h3>
      {!isLoading && <TagList tags={tagData} />}
      {isLoading && <LoadingIndicator />}
      {notification["type"] && (
        <Toast type={notification["type"]} message={notification["message"]} />
      )}
    </section>
  );
}

export default Tags;
