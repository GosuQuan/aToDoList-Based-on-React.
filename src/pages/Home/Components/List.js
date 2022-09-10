import Item from "./Item";
// item is a child,it's List child.
// const arr = ['woowow','2','3']
const List = ({ listData, deleteData }) => {
  console.log("Listdata", listData);
  return (
    <div className="List">
      {listData.map((item) => {
        const { note, date, time, id} = item;
        return (
          <Item
            id={id}
            key={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          ></Item>
        );
      })}
    </div>
  );
};

export default List;
