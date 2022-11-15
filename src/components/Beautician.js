import "./css/doctor.css";
import { PersonCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Beautician({ beautician }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="doctor">
      {/* <PersonCircle className="doctorimg" /> */}
      <img src={beautician.image} alt=" beautician image" 
          
          style={{
            height:"250px",
            width:"300px", 
            objectFit:"cover"  
            // transform: isHovering ? "scale(1.1)": '',
          }}/>
      <div className="doctorinfo">
        <div className="doctorcat">
          <div>Dept:- {beautician.department}</div>
          <div className="exp"> Exp: {beautician.experience} years</div>
        </div>
        <span className="doctortitle">
          {beautician.firstname} <span></span>
          {beautician.lastname}
          <samp className="education"> {beautician.education}</samp>
        </span>
      </div>
      <p className="doctordescription">
        Very Experience doctor with Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Iste quam, vitae et quia eaque aut obcaecati ea. Sequi
        corporis, nam at, repellat placeat doloribus vitae incidunt numquam
        deleniti corrupti rem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sapiente architecto dolores officiis doloremque natus
        delectus voluptatem quae placeat possimus doloribus! Optio repellendus
        sed saepe nihil ea, rerum expedita repellat obcaecati. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Molestias, ipsa natus, sequi odit
        earum perferendis neque amet quam repellat adipisci, repellendus eum
        laborum accusamus dolor quae! At itaque expedita ab.
      </p>
      {user && (
        <Button
          variant="warning"
          type="submit"
          className=""
          onClick={() => {
            navigate(`/bookAppointment/${beautician._id}`);
          }}
        >
          Book Appointment
        </Button>
      )}
    </div>
  );
}

export default Beautician;
