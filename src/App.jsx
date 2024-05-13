import React, {useState} from 'react';
import Title from './Title';
import menu from './data'
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];


const allCategories = ['all', ...new Set(menu.map((item) => item.category))]



const App = () => {
  const [menuItems, setmenuItems] = useState(menu);
  const [categories, setcategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if(category === 'all'){
      setmenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setmenuItems(newItems);
  }


  return( 
    <main>
        <section className="menu">
          <Title text= 'Our Menu'/>
          <Categories categories = {categories} filterItem = {filterItems}/>

          <Menu items = {menuItems}/>
        </section>
    </main>
  );
};
export default App;
