const Item = ({ id, note, date, time, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <p>{note}</p>
      <p>{`${date} ${time}`}</p>
      <button className="remove" onClick={deleteItem}>
        删除
      </button>
    </div>
  );
};

export default Item;
