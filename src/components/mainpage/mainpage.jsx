import React, { Suspense, useEffect, useState } from 'react'
import './mainpage.css'
import CategoryFilter from '../category-filters/CategoryFilter'
import Trending from '../trending/trending'
import TopBloggers from '../topbloggers/topbloggers'

const BlogPost = React.lazy(()=>import('../BlogPost/blogpost'))

const MainPage = () =>{

    const blgPosts = [
        {
          name: "Alice Coder",
          title: "Trends in Web Dev",
          date: "08 Jan",
          description: "Exploring the latest trends in web development and coding practices.",
          category: "Coding",
        },
        {
          name: "Emma Scientist",
          title: "Groundbreaking Scientific Discoveries",
          date: "10 Jan",
          description: "Delving into groundbreaking scientific discoveries and theories.",
          category: "Science",
        },
        {
          name: "Ryan Wanderlust",
          title: "Journeys Around the World",
          date: "12 Jan",
          description: "Embarking on exciting journeys around the world, sharing travel tips and experiences.",
          category: "Traveling",
        },
        {
          name: "Charlie Explorer",
          title: "Documenting Adventures",
          date: "20 Jan",
          description: "Documenting adventures and hidden gems in various destinations.",
          category: "Traveling",
        },
        {
          name: "Olivia Wellness",
          title: "Promoting a Healthy Lifestyle",
          date: "25 Jan",
          description: "Promoting a healthy lifestyle through fitness routines, nutritious recipes, and well-being tips.",
          category: "Wellness",
        },
        {
          name: "Grace TechEnthusiast",
          title: "Diving into Technology",
          date: "02 Feb",
          description: "Diving into the world of technology, gadgets, and the latest innovations.",
          category: "Technology",
        },
        {
          name: "Sammy NatureExplorer",
          title: "Connecting with Nature",
          date: "15 Feb",
          description: "Connecting with nature and wildlife, sharing insights on environmental conservation.",
          category: "Nature",
        },
        {
          name: "Max FoodieAdventures",
          title: "Exploring Diverse Cuisines",
          date: "18 Feb",
          description: "Exploring diverse cuisines, food cultures, and sharing delightful culinary experiences.",
          category: "Food",
        },
        {
          name: "Sophia Bookworm",
          title: "Diving into Books",
          date: "22 Feb",
          description: "Diving into captivating books, literary reviews, and the joy of reading.",
          category: "Books",
        },
        {
          name: "Daniel HealthExplorer",
          title: "Navigating Holistic Health",
          date: "28 Feb",
          description: "Navigating the world of holistic health, wellness practices, and mindful living.",
          category: "Wellness",
        },
        {
          name: "Ethan CodeExplorer",
          title: "Sharing Coding Insights",
          date: "05 Mar",
          description: "Sharing insights into coding challenges, solutions, and programming best practices.",
          category: "Coding",
        },
        {
          name: "Zoe Fashionista",
          title: "Navigating Fashion Trends",
          date: "10 Mar",
          description: "Navigating the world of fashion trends, style tips, and wardrobe inspirations.",
          category: "Fashion",
        },
        {
          name: "Nathan ScienceEnthusiast",
          title: "Wonders of Science",
          date: "15 Mar",
          description: "Exploring the wonders of science, from physics to astronomy, and scientific breakthroughs.",
          category: "Science",
        },
        {
          name: "Lily AdventureSeeker",
          title: "Thrilling Adventures",
          date: "20 Mar",
          description: "Embarking on thrilling adventures, outdoor activities, and adrenaline-pumping experiences.",
          category: "Adventure",
        },
        {
          name: "Mia ArtisticSoul",
          title: "Diving into Art",
          date: "25 Mar",
          description: "Diving into the world of art, creativity, and the beauty of various artistic expressions.",
          category: "Art",
        },
        {
          name: "Oliver CulinaryExplorer",
          title: "Exploring Culinary Delights",
          date: "01 Apr",
          description: "Exploring culinary delights from around the world, experimenting with diverse recipes.",
          category: "Food",
        },
        {
          name: "Ava WellnessJourney",
          title: "Holistic Wellness Journey",
          date: "08 Apr",
          description: "Embarking on a holistic wellness journey, from mindfulness to fitness and mental health.",
          category: "Wellness",
        },
        {
          name: "Noah SciFiEnthusiast",
          title: "Diving into Sci-Fi Realms",
          date: "15 Apr",
          description: "Diving into the realms of science fiction, discussing books, movies, and futuristic concepts.",
          category: "Books",
        },
        {
          name: "Sophie SustainableLiving",
          title: "Promoting Sustainable Living",
          date: "22 Apr",
          description: "Promoting sustainable living, eco-friendly practices, and environmental consciousness.",
          category: "Environment",
        },
        {
          name: "Liam MusicVibes",
          title: "Exploring Music Genres",
          date: "30 Apr",
          description: "Exploring diverse music genres, sharing favorite tracks, and the latest trends in the music world.",
          category: "Music",
        },
        {
          name: "Mason TechInnovator",
          title: "Highlighting Tech Innovations",
          date: "05 May",
          description: "Highlighting the latest technological innovations, startups, and industry trends.",
          category: "Technology",
        },
        {
          name: "Ella DIYEnthusiast",
          title: "Sharing DIY Projects",
          date: "12 May",
          description: "Sharing creative DIY projects, crafting ideas, and home decor inspirations.",
          category: "DIY",
        },
        {
          name: "Jackson FitnessFanatic",
          title: "Providing Fitness Tips",
          date: "18 May",
          description: "Providing fitness tips, workout routines, and nutrition advice for a healthy lifestyle.",
          category: "Fitness",
        },
        {
          name: "Aria MovieBuff",
          title: "Exploring Cinema",
          date: "25 May",
          description: "Exploring the world of cinema, reviewing movies, and discussing the art of filmmaking.",
          category: "Movies",
        },
        {
          name: "Carter TravelExplorer",
          title: "Sharing Travel Adventures",
          date: "01 Jun",
          description: "Sharing travel adventures, cultural insights, and tips for immersive experiences.",
          category: "Traveling",
        },
        {
          name: "Isaac DataScientist",
          title: "Data Science Insights",
          date: "05 Jun",
          description: "Sharing insights into data science, machine learning, and analytics.",
          category: "Data Science",
        },
        {
          name: "Aiden CodeNinja",
          title: "Mastering Coding Challenges",
          date: "10 Jun",
          description: "Mastering coding challenges, solving complex problems, and improving coding skills.",
          category: "Coding",
        },
        {
          name: "Mila SpaceExplorer",
          title: "Exploring the Cosmos",
          date: "15 Jun",
          description: "Embarking on a journey to explore the cosmos, astronomical phenomena, and the mysteries of space.",
    category: "Space",
  },
  {
    name: "Leo GamingPro",
    title: "Mastering the Gaming World",
    date: "20 Jun",
    description: "Mastering the gaming world, sharing gaming strategies, reviews, and the latest trends in the gaming industry.",
    category: "Gaming",
  },
  {
    name: "Avery CodeArtist",
    title: "Artistry in Coding",
    date: "25 Jun",
    description: "Showcasing artistry in coding, creating beautiful and efficient code, and exploring the intersection of art and technology.",
    category: "Coding",
  },
  {
    name: "Eva PetLover",
    title: "Caring for Our Furry Friends",
    date: "01 Jul",
    description: "Dedicated to caring for our furry friends, sharing pet care tips, and celebrating the joy of having pets in our lives.",
    category: "Pets",
  },
  {
    name: "Owen FitnessExplorer",
    title: "Exploring Fitness Frontiers",
    date: "08 Jul",
    description: "Exploring new frontiers in fitness, from unconventional workout routines to fitness challenges and wellness insights.",
    category: "Fitness",
  },
  {
    name: "Hazel TechInnovator",
    title: "Tech Innovations and Beyond",
    date: "15 Jul",
    description: "Delving into the latest tech innovations, futuristic concepts, and the impact of technology on society.",
    category: "Technology",
  },
    ]

    const [categoryList,setCategoryList] = useState([])
    
    const [blgList, setBlgList] = useState(blgPosts);

useEffect(() => {
  // Check if categoryList is not empty before filtering
  if (categoryList.length > 0) {
    setBlgList(blgPosts.filter((blg) => categoryList.includes(blg.category))
    );
  } else {
    // If categoryList is empty, reset to the full list
    setBlgList(blgPosts);
  }
}, [categoryList]);

    return(
        <div className="main-page-content">
            <div className="main-page-listings">
                <div className="blg-pst-pls-trnd-pls-prf">
                    <div className="blg-pst-container">
                        <Suspense fallback = { <div> Please Wait... </div>} >
                        {blgList.map((blg,index)=>{
                            return(
                                <BlogPost {...blg} key={index}/>
                            )
                        })}
                        </Suspense>
                    </div>
                    <div className="top-trnd-pls-prf-pls-filters">
                        <div className="blgs-filters-container">
                            <div className="blgs-category-filters">
                                <CategoryFilter categoryList={categoryList} setCategoryList={setCategoryList}/>
                            </div>
                        </div>
                        <div className="top-prf-container">
                          <TopBloggers/>
                        </div>
                        <div className="top-trnd-blgs">
                          <Trending/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;