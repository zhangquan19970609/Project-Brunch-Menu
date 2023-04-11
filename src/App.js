import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// function App() {

//   const [list, setList] = useState(items);
//   // const [category, setCategory] = useState("all");  

//   const getAll = () => {
//     let category = "all";
//     setList(items);
//   }
//   const getBreakfast = () => {
//     let category = "breakfast";
//     setList(items.filter((item) => {return item.category === category}));
//   }
//   const getLunch = () => {
//     let category = 'lunch';
//     setList(items.filter((item) => {return item.category === category}));
//   }
//   const getShakes = () => {
//     let category = 'shakes';
//     setList(items.filter((item) => {return item.category === category}));
//   }

//   return <main>
//     <section className='menu section'>
//       <div className='title'>
//         <h2>Our Menu</h2>         
//         <div className='underline'></div>
//       </div>
//       <div className='btn-container'>
//         <button type='button' className='filter-btn' onClick={getAll}>All</button>
//         <button type='button' className='filter-btn' onClick={getBreakfast}>Breakfast</button>
//         <button type='button' className='filter-btn' onClick={getLunch}>Lunch</button>
//         <button type='button' className='filter-btn' onClick={getShakes}>Shakes</button>
//       </div>

//       <div className='section-center'>
//         {list.map(({id,title,category,price,img,desc}) => {
//           return <Menu 
//             key={id}
//             id={id}
//             title={title}
//             category={category}
//             price={price}
//             img={img}
//             desc={desc}
//           />
//         })}
//       </div>
//     </section>
//   </main>;
// }

// 第一次做的思路：（手动设置按钮，filter function 重复 4 次，复用性差。）
  // 不使用 Category component，直接在 App.js 中 render 所有 component；
  // 手动设置四个 button 的 onClick，
    // 用 let category = XX 的方式，filter 掉 category 不为 XX 的项目。


// 参考答案思路：
  // Category 作为一个单独的components，承接 filterItem function，
  // filterItem 又包含 Items 的 setter。
  // 使用 new Set 方法，自动 query data 中的 categories。

// 设置一个动态的 category array:

const allCategories = ["all", ...new Set(items.map((item) => item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // 在 filterItems 中单列 all 的情况，进行讨论；
      // if 可以在调用 setter 后，用一个 single return 结束语句。

    if (category === "all") {
      setMenuItems(items);
      return;
    }
    // 与第一次自己做的方法一样：
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>         
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>;

}

export default App;
