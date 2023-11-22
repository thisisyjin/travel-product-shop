const Products = ({ name, imagePath }) => {
  console.log('products : ', name, imagePath);
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
        style={{ width: '75%' }}
      />
      <form style={{ marginTop: '10px' }}>
        <label htmlFor="" style={{ textAlign: 'right' }}>
          {name}
        </label>
        <input
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          style={{ marginLeft: '70x' }}
        />
      </form>
    </div>
  );
};

export default Products;
