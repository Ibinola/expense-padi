function SignUpAuthButton(props) {
  return (
    <button className="btn bg-white border-[#D0D5DD] rounded-lg disabled:transform-none">
      {props.icon}
      Sign up with {props.name}
    </button>
  );
}

export default SignUpAuthButton;
