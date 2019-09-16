import React from "react";
import classes from "./Login.module.css";
import { NavLink } from 'react-router-dom';

// let Login = (props) => {
//   console.log(props)
//   let id = null;
//   let email = null;

//   // handleChange(e) {
//   //   this.setState({ login: e.target.value });
//   // }
//   // handleSetShowPassword(e) {
//   //   this.setState({ showPassword: e.target.checked });
//   // }
//   // handleUpDatePassword(e) {
//   //   this.setState({ password: e.target.value });
//   // }

//   if (props.isLogin) {
//     return <div className={classes.nick}>{props.login}</div>;
//   } else {
//     return (
//       <div className={classes.login}>
//         <form action="">
//           <div className={classes.login_input}>
//             <input
//               type="text"
//               size="13"
//               placeholder="login"
//               value={props.login}
//               onChange={props.handleChange}
//             />
//             <input
//               type={props.showPassword ? "text" : "password"}
//               size="13"
//               placeholder="password"
//               value={props.password}
//               onChange={props.handleUpDatePassword}
//             />
//           </div>
//           <label htmlFor="checkpass" className={classes.show}>
//             <input
//               type="checkbox"
//               id="checkpass"
//               value={props.showPassword}
//               onChange={props.handleSetShowPassword}
//             />
//             show password
//           </label>
//         </form>
//         <button onClick={props.handleClick}>
//           {props.isLogIn ? "logout" : "login"}
//         </button>
//       </div>
//     );
//   }
// };


let Login = props => {
  return <NavLink to={'/login'}>Login</NavLink>;
};

export default Login;
