import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { SelectedTagsContext } from "../SelectedTagsProvider";

const subTagsCache = new Map();

function TagList({ tags, selectedTagTitles = [] }) {
  const [subTags, setSubTags] = useState({ id: null, tags: [] });
  const { selected, setSelected } = useContext(SelectedTagsContext);

  useEffect(() => {
    if (selected.id !== null) {
      fetchSubtags(selected.id);
    }
  }, []);

  const handleClick = async (e, id, parent, selectedTagTitles) => {
    e.stopPropagation();
    await fetchSubtags(id, selectedTagTitles);
    setSelected({ id: parent || id, selectedTagTitles });
  };

  const fetchSubtags = async (id = "") => {
    try {
      let _subTags = [];
      if (subTagsCache.has(id)) {
        setSubTags(subTagsCache.get(id));
      } else {
        const q = query(
          collection(getFirestore(), "tags"),
          where("parent", "==", id),
          orderBy("title", "desc")
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) =>
          _subTags.push({ id: doc.id, ...doc.data() })
        );

        subTagsCache.set(id, { id, tags: _subTags });
        setSubTags({ id, tags: _subTags });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagTitle = new FormData(e.target).get("tag-title");
    await addTag(subTags.id, tagTitle);
    e.target.reset();
  };

  const addTag = async (parent, title) => {
    try {
      const docRef = await addDoc(collection(getFirestore(), "tags"), {
        parent,
        title,
      });
      console.log(`Document written with ID: ${docRef}`);
    } catch (error) {
      console.log(error);
    } finally {
      fetchSubtags();
    }
  };

  return (
    <ul>
      <li>
        {/* <span>Add tag</span> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="tag-title"
            id=""
            placeholder="Tag title"
            autoComplete="off"
            required
          />
          <button type="submit">Save</button>
        </form>
      </li>
      {tags.map(({ id, title, parent }) => (
        <li
          key={id}
          onClick={(e) =>
            handleClick(e, id, parent, [...selectedTagTitles, title])
          }
        >
          {title}
          {subTags.id === id && subTags.tags.length > 0 && (
            <TagList
              tags={subTags.tags}
              selectedTagTitles={[...selectedTagTitles, title]}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
