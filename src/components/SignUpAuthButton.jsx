function SignUpAuthButton({ name, icon, handleSignUp }) {
  return (
    <button
      className="btn bg-white border-[#D0D5DD] rounded-lg disabled:transform-none"
      onClick={handleSignUp}
    >
      {icon}
      {name}
    </button>
  );
}

export default SignUpAuthButton;
