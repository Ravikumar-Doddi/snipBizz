import {BsFillRecordCircleFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {GiWeight} from "react-icons/gi"



import "./index.css"

const headerList = ["About" , "How It Works" , "Tracking" , "Ratings" , "FAQ" , "Careers" , "Blog" , "Contact"]

const TopContainer = () => (
        <div className="top-container">
        <div className="header">
        <img className="logo" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675420710/SnipBiz-Logos_1_s5_ii6rte.png" alt = "Logo"/>
        <ul className="list-container">
        {headerList.map(eachOne => (
            <li className="list-item">{eachOne}</li>
        ))}
        </ul>
        <button className="login-button" type = "button">Login/Register</button>
        <h4><span className="en">En</span> | Es</h4>
        </div>
        <div className="robo-container">
        <div className="input-div">
        <h3 className="shop" >Obtain best rates from reliable shipping companies.</h3>
        <img className="shipping" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675420557/discounts_1image1_ciuvhc.png" alt = "off"/>
        <div className="input-container">
        <BsFillRecordCircleFill/>
        <p className="input-text">Enter pickup location</p>
        </div>
        <img className="line" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675425943/Line_4_s7_mkqqvm.png" alt = "line"/>
        <div className="input-container">
        <MdLocationOn className="icon"/>
        <p className="input-text">Enter destination</p>
        </div>
        <div className="input-container">
        <GiWeight/>
        <p className="input-text">Enter Approximate Weight</p>
        </div>
        <p className="question">Do you need help for get approximate weight and measurements?</p>
        <div className="stars">
        <button className="get-quote">Get Quote</button>
        <img className="star-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675425560/Untitled-1_1_s6_vughy5.png" alt = "star"/>
        </div>
        </div>
        <div>
        <h3 className="shop">Shop anywhere in US let us ship to your doorstep in your country*</h3>
        <h4 className="tax">Tax free*</h4>
        <p>Shop any where in US let us ship to your doorstep in your country Shop any where in US let us ship to your doorstep... <span className="span">Know More</span></p>
        <img className="box" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675424678/Group-812-1_1_s5_zbxmql.png" alt = "box"/>
        </div>
        </div>
        </div>
)


export default TopContainer

