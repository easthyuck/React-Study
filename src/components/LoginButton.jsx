import { withRouter } from "react-router";

export default withRouter(function LoginButton(props) {
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }
  return <button onClick={login}>Run Login</button>;
});
