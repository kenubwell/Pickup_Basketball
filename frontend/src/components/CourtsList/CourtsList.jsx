import react from "react";
import './CourtsList.css';
import { Link } from "react-router-dom";

const CourtsList = () => {
    return ( 
        <div>
            <div className="courts-title"><h3>Courts</h3></div>
            <div className="courtlist-contr">
                <div className="container-hov">
                    <Link to ="/courts/waterloo"><img src ="/images/waterloocourt.jpg" className = "court-image" alt = "wl court"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-courts-title">Waterloo Park Basketball Court</div>
                </div>
                <div className="container-hov">
                    <Link to ="/courts/liongate"><img src ="/images/lionsgatecourt.jpg" className = "court-image" alt = "lg court"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-courts-title">Lions Gate Basketball Court</div>
                </div>
                <div className="container-hov">
                    <Link to ="/courts/cedarpark"><img src ="/images/cedarparkcourt.jpg" className = "court-image" alt = "cp court"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-courts-title">Cedar Park Basketball Court</div>
                </div>
                <div className="container-hov">
                    <Link to ="/courts/meadow"><img src ="/images/meadowbrook.jpg" className = "court-image" alt = "complex"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-courts-title">Meadowbrook Athletic Complex</div>
                </div>
            </div>
        </div>
     );
}
 
export default CourtsList;