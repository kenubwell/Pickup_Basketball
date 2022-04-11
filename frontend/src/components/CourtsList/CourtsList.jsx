import react from "react";
import './CourtsList.css';
import { Link } from "react-router-dom";

const CourtsList = () => {
    return ( 
        <div>
            <div className="courts-title"><h2>Courts</h2></div>
            <div className="courtlist-contr">
                <div>
                    <Link to ="/courts/waterloo"><img src ="/images/waterloocourt.jpg" className = "court-image" alt = "wl court"/></Link>
                    <div className="list-courts-title">Waterloo Park Basketball Court</div>
                </div>
                <div>
                    <Link to ="/courts/liongate"><img src ="/images/lionsgatecourt.jpg" className = "court-image" alt = "lg court"/></Link>
                    <div className="list-courts-title">Lions Gate Basketball Court</div>
                </div>
                <div>
                    <Link to ="/courts/cedarpark"><img src ="/images/cedarparkcourt.jpg" className = "court-image" alt = "cp court"/></Link>
                    <div className="list-courts-title">Cedar Park Basketball Court</div>
                </div>
                <div>
                    <Link to ="/courts/meadow"><img src ="/images/meadowbrook.jpg" className = "court-image" alt = "complex"/></Link>
                    <div className="list-courts-title">Meadowbrook Athletic Complex</div>
                </div>
            </div>
        </div>
     );
}
 
export default CourtsList;