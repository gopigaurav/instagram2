import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  return (
    <div className="s_in_c">
      <div className="s_in_cf">
        <div>
          <Link to="/" className="logoSignin">
            Instagram
          </Link>
        </div>
        <div className="s_in__c_c">
          <div className="s_in_c_in">
            <input type="text" placeholder="username" />
          </div>
          <div className="s_in_c_in">
            <input type="text" placeholder="email" />
          </div>
          <div className="s_in_c_in">
            <input type="password" placeholder="password" />
          </div>
          <div className="den_bnt">Log In</div>
        </div>
        <div>
          <p className="or_text">OR</p>
        </div>
        <div className="lof_fb">
          <p>Log in with Facebook</p>
        </div>
      </div>
      <div className="signin__text">
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
