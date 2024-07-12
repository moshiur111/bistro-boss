import { useEffect, useState } from "react";
import MenuCover from "../../../components/MenuCover/MenuCover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import MenuButton from "../../../components/MenuButton/MenuButton";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('/menu.json')
        .then(data => data.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])
    console.log(menu);
  return (
    <section>
      <MenuCover
        menuTitle={"Bistro Boss"}
        menuDescription={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus atque debitis voluptas excepturi rem nostrum tempora, dicta officia, ipsa illo expedita fugit perferendis dolore. Sapiente veritatis ullam at. Voluptatum!"
        }
      ></MenuCover>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      
      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-2">
        {
            menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <MenuButton name={'View Full  Menu'}></MenuButton>
    </section>
  );
};

export default PopularMenu;
