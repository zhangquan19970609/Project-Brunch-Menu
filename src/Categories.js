import React from 'react';

const Categories = ({categories, filterItems}) => {

  return (<div className='btn-container'>
        {/* 可以 manual 设置 onClick={() => filterItems("all")，
        配合 filterItems 使用：const filterItems = (category) => {
              if (category === "all") {
                setMenuItems(items);
                return;
              }
              const newItems = items.filter((item) => item.category === category);
              setMenuItems(newItems);
            }
        但这样并不能方便多个 category button 的调用 */}

        {/* 注入 categories，并对categories 展开循环，每个 category 都建立一个 button，
        并在其中对该category使用 filterItems！ */}
        {categories.map((category,index) => {
          return (<button
            className='filter-btn'
            type='button'
            key={index}
            onClick={() => {filterItems(category)}}
          >{category}</button>);
        })}
        
      </div>);
};

export default Categories;
