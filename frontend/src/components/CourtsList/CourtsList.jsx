import react from "react";
import './CourtsList.css';
import { Link } from "react-router-dom";

const CourtsList = () => {
    return ( 
        <div>
            <div><h2 className="courts-title">Courts</h2></div>
            <div className="courtlist-contr">
                <div>
                    <Link to ="/courts/waterloo"><img src ="/images/waterloocourt.jpg" className = "court-image" alt = "wl court"/></Link>
                    <p>Waterloo Park Basketball Court</p>
                </div>
                <div>
                    <Link to ="/courts/liongate"><img src ="/images/lionsgatecourt.jpg" className = "court-image" alt = "lg court"/></Link>
                    <p>Lions Gate Basketball Court</p>
                </div>
                <div>
                    <Link to ="/courts/cedarpark"><img src ="/images/cedarparkcourt.jpg" className = "court-image" alt = "cp court"/></Link>
                    <p>Cedar Park Basketball Court</p>
                </div>
                <div>
                    <Link to ="/courts/meadow"><img src ="/images/meadowbrook.jpg" className = "court-image" alt = "complex"/></Link>
                    <p>Meadowbrook Athletic Complex</p>
                </div>
            </div>
        </div>
     );
}
 
export default CourtsList;