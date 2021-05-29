import classes from "./ProfileForm.module.css";
import { useContext, useRef } from "react";
import { AuthContext } from "../../store/auth-context";

const ProfileForm = () => {
  const passwordRef = useRef();
  const authctx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const newPass = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAS_kSjwYKktaU1BjCHAQ3G2oiTE2l4AsE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authctx.token,
          password: newPass,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((res) => {
            throw new Error(res.error.message);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
