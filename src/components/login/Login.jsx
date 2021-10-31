import { TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { signup, signin } from "../../actions/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(true);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    token: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const sendToLogin = () => {
    setAlreadyHaveAccount(!alreadyHaveAccount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!alreadyHaveAccount) {
      if (user.password !== user.confirmPassword)
        alert("Please make sure that you type the same password");
      else {
        dispatch(signup(user));
        history.push("/chat");
      }
    } else {
      dispatch(signin(user));
      history.push("/chat");
      
    }
  };

  if (alreadyHaveAccount)
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <Typography variant="h4" className="title">
            Log In
          </Typography>

          <TextField
            type="text"
            label="Email"
            variant="outlined"
            color="primary"
            fullWidth
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            color="primary"
            fullWidth
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <Button type="submit" fullWidth color="primary" variant="contained">
            Sign In
          </Button>
          <Typography variant="contained" className="link-to-login">
            Don't have an account? Click&nbsp;
            <span onClick={sendToLogin} className="click">
              here
            </span>{" "}
            &nbsp;to register.
          </Typography>
        </form>
      </div>
    );

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <Typography variant="h4" className="title">
          Sign Up
        </Typography>

        <div className="login-user-name">
          <TextField
            type="text"
            label="First Name"
            variant="outlined"
            color="primary"
            fullWidth
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          />
          <TextField
            type="text"
            label="Last Name"
            variant="outlined"
            color="primary"
            fullWidth
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          />
        </div>
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          color="primary"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          color="primary"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <TextField
          type="password"
          label="Confirm password"
          variant="outlined"
          color="primary"
          fullWidth
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        <Button type="submit" fullWidth color="primary" variant="contained">
          Register
        </Button>
        <Typography variant="contained" className="link-to-login">
          Already have an account? Click&nbsp;
          <span onClick={sendToLogin} className="click">
            here
          </span>{" "}
          &nbsp;to Log In.
        </Typography>
      </form>
    </div>
  );
};

export default Login;
