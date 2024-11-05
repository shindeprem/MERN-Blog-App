import { useEffect, useState } from 'react'
import './CategoryFilter.css'



const CategoryFilter =(props)=>{

    const {categoryList,setCategoryList} = props;

    const allCategories = ["Coding",
        "Science",
        "Traveling",
        "Wellness",
        "Technology",
        "Nature",
        "Food",
        "Books",
        "Art",
        "Environment",
        "Music",
        "DIY",
        "Fitness",
        "Movies",
        "Space",
        "Gaming",
        "Pets"]

    const addCategory = (ctgr) => {
        if (categoryList.includes(ctgr)) {
          setCategoryList((prevCategories) =>
            prevCategories.filter((category) => category !== ctgr)
          );
        } else {
          setCategoryList([...categoryList, ctgr]);
        }
      };
        

    return(
        <div className="category-filters-container">
            <div className="fltr-heading-container">
                Filter By Categories
            </div>
            <div className="all-categories-container">
                {
                allCategories.map((category,index)=>{
                    return(
                        <div className={`single-ctgr-container ${categoryList.includes(category)?'selected-category':''}`} onClick={()=>addCategory(category)}>
                            {category}
                        </div>
                    )
                })
                }
            </div>
            
        </div>
    )
}

export default CategoryFilter;