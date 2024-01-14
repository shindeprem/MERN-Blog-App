import './blogpost.css';
import img1 from '../../assets/Profile.jpg'
import img2 from '../../assets/tech.jpg'
// import 'aos/dist/aos.css';
// import Aos from 'aos';

const BlogPost = (blg)=>{

    const {name,date,title,description,category} = blg;

    // const shortDesc = description.slice(0,158);

    // Aos.init({
    //     duration: 800, 
    //     easing: 'ease-in-out',
    //     once: true 
    //   });

    return(
        <div className="single-blg-pst">
            <div className="single-blg-pst-dets">
                <div className="blg-pst-header-section">
                    <div className="admin-profile-pc">
                        <img src={img1} alt="Admin Profile Photo" />
                    </div>
                    <div className="admin-name-pc">
                        {name}
                    </div>
                    <div className="admin-date-pc">
                        {date}
                    </div>
                </div>
                <div className="blg-pst-title-section">
                    {title}
                </div>
                <div className="blg-pst-desc-section">
                    {description}
                </div>
                <div className="category-section">
                    {category}
                </div>
            </div>
            <div className="single-blg-pst-poster">
                <img src={img2} alt="" />
            </div>
        </div>
        
    )
}

export default BlogPost;