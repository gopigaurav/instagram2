import { Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../app/actions/user";
import { useDispatch } from "react-redux";
function Signup() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const data = { name, email, password };
    dispatch(signUp(data, history));
  };
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
            <input
              type="text"
              placeholder="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="s_in_c_in">
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="s_in_c_in">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            />
          </div>
          <div className="den_bnt" onClick={handleSubmit}>
            Log In
          </div>
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
