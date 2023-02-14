



export const Profile  = (props) => {


    const handleSubmit = async (e) => {

        e.preventDefault()

        
    }



    return (
        <div className = "profile-screen" >
            This is the Profile compoent
            <hr/>
            <button className="link-btn" onClick={() => props.onScreenSwitch('Home')}>Home</button>
            <button className="link-btn" onClick={() => props.onScreenSwitch('Profile')}>Profile</button>
            <hr/>
        </div>
    )



}