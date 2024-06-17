import PropTypes from "prop-types";
function List(props) {
  const itemList = props.items;
  const category = props.category;

  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  //fruits.sort((a, b) => b.calories - a.calories);
  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
  const listItem = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItem}</ul>
    </>
  );
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  items: [],
};
export default List;
