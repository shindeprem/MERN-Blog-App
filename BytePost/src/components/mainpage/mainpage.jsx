import BlogPost from '../BlogPost/blogpost'
import './mainpage.css'

const MainPage = () =>{

    const blgPosts = [
          {
            name: "Alice Coder",
            title:"Trends in Web Dev",
            date: "08 Jan",
            description: "Exploring kkgkgkgkgkgkgkgkgkkkk kkkk kkkk klklklklk gggggggggggggggggggggggggggggggggggg the latest trends in web development and coding practices.",
            category: "Coding",
          },
          // {
          //   name: "Emma Scientist",
          //   date: "10 Jan",
          //   description: "Delving into groundbreaking scientific discoveries and theories.",
          //   category: "Science",
          // },
          // {
          //   name: "Ryan Wanderlust",
          //   date: "12 Jan",
          //   description: "Embarking on exciting journeys around the world, sharing travel tips and experiences.",
          //   category: "Traveling",
          // },
          // {
          //   name: "Charlie Explorer",
          //   date: "20 Jan",
          //   description: "Documenting adventures and hidden gems in various destinations.",
          //   category: "Traveling",
          // },
          // {
          //   name: "Olivia Wellness",
          //   date: "25 Jan",
          //   description: "Promoting a healthy lifestyle through fitness routines, nutritious recipes, and well-being tips.",
          //   category: "Wellness",
          // },
          // {
          //   name: "Grace TechEnthusiast",
          //   date: "02 Feb",
          //   description: "Diving into the world of technology, gadgets, and the latest innovations.",
          //   category: "Technology",
          // },
          // {
          //   name: "Sammy NatureExplorer",
          //   date: "15 Feb",
          //   description: "Connecting with nature and wildlife, sharing insights on environmental conservation.",
          //   category: "Nature",
          // },
          // {
          //   name: "Max FoodieAdventures",
          //   date: "18 Feb",
          //   description: "Exploring diverse cuisines, food cultures, and sharing delightful culinary experiences.",
          //   category: "Food",
          // },
          // {
          //   name: "Sophia Bookworm",
          //   date: "22 Feb",
          //   description: "Diving into captivating books, literary reviews, and the joy of reading.",
          //   category: "Books",
          // },
          // {
          //   name: "Daniel HealthExplorer",
          //   date: "28 Feb",
          //   description: "Navigating the world of holistic health, wellness practices, and mindful living.",
          //   category: "Wellness",
          // },
          // {
          //   name: "Ethan CodeExplorer",
          //   date: "05 Mar",
          //   description: "Sharing insights into coding challenges, solutions, and programming best practices.",
          //   category: "Coding",
          // },
          // {
          //   name: "Zoe Fashionista",
          //   date: "10 Mar",
          //   description: "Navigating the world of fashion trends, style tips, and wardrobe inspirations.",
          //   category: "Fashion",
          // },
          // {
          //   name: "Nathan ScienceEnthusiast",
          //   date: "15 Mar",
          //   description: "Exploring the wonders of science, from physics to astronomy, and scientific breakthroughs.",
          //   category: "Science",
          // },
          // {
          //   name: "Lily AdventureSeeker",
          //   date: "20 Mar",
          //   description: "Embarking on thrilling adventures, outdoor activities, and adrenaline-pumping experiences.",
          //   category: "Adventure",
          // },
          // {
          //   name: "Mia ArtisticSoul",
          //   date: "25 Mar",
          //   description: "Diving into the world of art, creativity, and the beauty of various artistic expressions.",
          //   category: "Art",
          // },
          // {
          //   name: "Oliver CulinaryExplorer",
          //   date: "01 Apr",
          //   description: "Exploring culinary delights from around the world, experimenting with diverse recipes.",
          //   category: "Food",
          // },
          // {
          //   name: "Ava WellnessJourney",
          //   date: "08 Apr",
          //   description: "Embarking on a holistic wellness journey, from mindfulness to fitness and mental health.",
          //   category: "Wellness",
          // },
          // {
          //   name: "Noah SciFiEnthusiast",
          //   date: "15 Apr",
          //   description: "Diving into the realms of science fiction, discussing books, movies, and futuristic concepts.",
          //   category: "Books",
          // },
          // {
          //   name: "Sophie SustainableLiving",
          //   date: "22 Apr",
          //   description: "Promoting sustainable living, eco-friendly practices, and environmental consciousness.",
          //   category: "Environment",
          // },
          // {
          //   name: "Liam MusicVibes",
          //   date: "30 Apr",
          //   description: "Exploring diverse music genres, sharing favorite tracks, and the latest trends in the music world.",
          //   category: "Music",
          // },
          // {
          //   name: "Mason TechInnovator",
          //   date: "05 May",
          //   description: "Highlighting the latest technological innovations, startups, and industry trends.",
          //   category: "Technology",
          // },
          // {
          //   name: "Ella DIYEnthusiast",
          //   date: "12 May",
          //   description: "Sharing creative DIY projects, crafting ideas, and home decor inspirations.",
          //   category: "DIY",
          // },
          // {
          //   name: "Jackson FitnessFanatic",
          //   date: "18 May",
          //   description: "Providing fitness tips, workout routines, and nutrition advice for a healthy lifestyle.",
          //   category: "Fitness",
          // },
          // {
          //   name: "Aria MovieBuff",
          //   date: "25 May",
          //   description: "Exploring the world of cinema, reviewing movies, and discussing the art of filmmaking.",
          //   category: "Movies",
          // },
          // {
          //   name: "Carter TravelExplorer",
          //   date: "01 Jun",
          //   description: "Sharing travel adventures, cultural insights, and tips for immersive experiences.",
          //   category: "Traveling",
          // },
        ]

    return(
        <div className="main-page-content">
            <div className="main-page-listings">
                <div className="blg-pst-pls-trnd-pls-prf">
                    <div className="blg-pst-container">
                        {blgPosts.map((blg)=>{
                            return(
                                <BlogPost {...blg}/>
                            )
                        })}
                    </div>
                    <div className="top-trnd-pls-prf">
                        <div className="top-prf-container"></div>
                        <div className="top-trnd-blgs"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;