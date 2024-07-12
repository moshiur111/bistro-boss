const MenuButton = ({ name }) => {
  return (
    <div className="text-center">
      <button className="btn btn-outline border-0 border-b-4 uppercase my-2">
        {name}
      </button>
    </div>
  );
};

export default MenuButton;
