import './trending.css'
import { FaArrowTrendUp } from "react-icons/fa6";

const Trending = () =>{

    const trendingBlgs = [
        {},
        {},
        {},
    ]

    return(
        <div className="trnd-sec-container">
            <div className="trending-header-container">
                Trending <FaArrowTrendUp className='trending-icon'/>
            </div>

            <div className="trending-articles-container">
                {

                }
            </div>
        </div>
    )
}

export default Trending;