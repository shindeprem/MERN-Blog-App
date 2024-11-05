import './topbloggers.css'
import img1 from '../../assets/Profile.jpg'

const TopBloggers = ()=>{

    const topUserProfiles = [
        {
            prfsImg:img1,
            prfsName:'Nomad Blogger',
            prfsBio:'Blogging is the food kkkkk kkkkkk kkkkkk kkkkkk kkkkk kkkkkk kkkkk k k kk'
        },
        {
            prfsImg:img1,
            prfsName:'Nomad Blogger',
            prfsBio:'Blogging is the food'
        },
        {
            prfsImg:img1,
            prfsName:'Nomad Blogger',
            prfsBio:'Blogging is the food'
        },
    ]

    return(
        <div className="top-bloggers-container">
            <div className="top-blgrs-header">
                Top Profiles
            </div>

            <div className="top-prfs-container">
                {
                    topUserProfiles.map((prf)=>{
                        return(
                            <div className="individual-prf-container">
                                <div className="prf-img-container">
                                    <img src={prf.prfsImg} alt="" />
                                </div>

                                <div className="prf-info-container">
                                    <div className="prf-name-container">
                                        {prf.prfsName}
                                    </div>

                                    <div className="prf-bio-container">
                                        {prf.prfsBio}
                                    </div>
                                </div>

                                <div className="prf-follow-btn-container">
                                    <button className="follow-btn">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopBloggers