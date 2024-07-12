const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <section className="flex justify-between items-center gap-10">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div className="">
        <h3 className="font-semibold">{name}</h3>
        <p className=" invisible md:visible">{recipe}</p>
      </div>
      <div className="flex justify-between items-center gap-1">
        <p>$</p>
        <p>{price}</p>
      </div>
    </section>
  );
};

export default MenuItem;
