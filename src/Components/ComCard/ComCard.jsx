import '../ComCard/ComCard.css'
import main from  '../../assets/hero-img.jpg'
const UserCard = ({username,age,Hobby,Skill,Profession,Address,Pincode,Email,Contact}) => {

    return(
        <div>
        <h1>User Profile Card</h1>
        <div className='main-item'>
           <div className='Card'>
            <div className='img-1'>
            <img src={main} alt="" height="200px" width="200px"/>
            </div>
               <p class="name"><span>Username:-</span>{username}</p>
                <p><span>Age:-</span>{age}</p>
                <p><span>Hobby:-</span>{Hobby}</p>
                <p><span>Skill:-</span>{Skill}</p>
                <p><span>Profession:-</span>{Profession}</p>
                <p><span>Address:-</span>{Address}</p>
                <p><span>Pincode:-</span>{Pincode}</p>
                <p><span>Email:-</span>{Email}</p>
                <p><span>Contact:-</span>&nbsp;{Contact}</p>
           </div>
        </div>
        </div>
    )
}
export default UserCard;