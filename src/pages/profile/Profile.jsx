import "./profile.css"


import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Topbar from '../../components/topbar/Topbar'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
        <Sidebar/> 
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img  className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                <img  className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Hosea Kibet</h4>
                    <span className="profileInfoDesc" >How a you my friends ?</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile />
            </div>
        </div>
    </div>
    </>
  )
}
