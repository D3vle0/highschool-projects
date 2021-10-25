import { withRouter } from "react-router-dom";

export default withRouter(function LoginButton(props) {
    function login() {
        setTimeout(() => {
            props.history.push('/'); // 페이지 재 갱신 X
        }, 1000);
    }
    return (
        <button onClick={login}>Login</button>
    );
})