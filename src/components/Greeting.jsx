function UserGreeting(props) {
    return <h1>Hello, {props.name}</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting name={'我是登录的用户'} />
    }
    return <GuestGreeting />
}
export default Greeting;
