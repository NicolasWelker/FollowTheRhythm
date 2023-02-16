

export const Home = (props) => {



    return (
        <div className = "home-screen" >

            <label htmlFor="home-screen">Home Component</label>
            <hr/>
            <button className="link-btn" onClick={() => props.onScreenSwitch('Home')}>Home</button>
            <button className="link-btn" onClick={() => props.onScreenSwitch('Profile')}>Profile</button>
            <hr/>

        </div>
            


    )
}