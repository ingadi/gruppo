import TagList from "./TagList";
import styles from "./Tags.module.css";

const TAGS_DATA = [
  {
    title: "Music",
    id: "music",
    children: [
      { title: "Chords", id: "1", children: [] },
      { title: "Rhythm", id: "2", children: [] },
      { title: "Scales", id: "3", children: [] },
      {
        title: "Sound design",
        id: "sound-design",
        children: [{ title: "Synthesis", id: "4", children: [] }],
      },
    ],
  },
  {
    title: "Programming",
    id: "programming",
    children: [
      {
        title: "Algorithms",
        id: "algorithms",
        children: [
          { title: "Sorting", id: "5", children: [] },
          { title: "Searching", id: "6", children: [] },
          { title: "Graphs", id: "7", children: [] },
        ],
      },
      {
        title: "Data structures",
        id: "data-structures",
        children: [
          { title: "Trees", id: "8", children: [] },
          { title: "Arrays", id: "9", children: [] },
          { title: "Hash tables", id: "10", children: [] },
          { title: "Linked lists", id: "11", children: [] },
          { title: "Stacks", id: "12", children: [] },
          { title: "Graphs", id: "13", children: [] },
        ],
      },
      { title: "Design patterns", id: "14", children: [] },
      {
        title: "Functional...",
        id: "15",
        children: [],
      },
      {
        title: "Object oriented ...",
        id: "16",
        children: [],
      },
      { title: "Web development", id: "17", children: [] },
    ],
  },
  {
    title: "Fitness",
    id: "fitness",
    children: [
      { title: "Strength training", id: "18", children: [] },
      { title: "Cardio", id: "19", children: [] },
      { title: "Stretching", id: "20", children: [] },
      { title: "Diet", id: "21", children: [] },
    ],
  },
];

function Tags() {
  return (
    <section className={styles.tags}>
      <h3>My tags</h3>
      <TagList data={TAGS_DATA} />
    </section>
  );
}

export default Tags;
