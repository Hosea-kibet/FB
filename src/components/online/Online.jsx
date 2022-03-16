import "./online.css"

export default function Online({user}) {
  return (
    <li className="righbarFriend">
    <div className="rightbarProfileImgContainer">
      <img src={user.profilePicture} alt="" className="rightbarProfleImg" />
      <span className="rightbaronline"></span>
    </div>
    <span className="rightbarUsername" >{user.username}</span>
  </li>
  )
}
