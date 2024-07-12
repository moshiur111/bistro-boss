
import backgroundImage from '../../assets/home/chef-service.jpg'
const MenuCover = ({menuTitle, menuDescription}) => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="bg-white p-8 text-black w-4/5">
          <h1 className="mb-2 text-3xl">{menuTitle}</h1>
          <p className="mb-5">
            {menuDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCover;
