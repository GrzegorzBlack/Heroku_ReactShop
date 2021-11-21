import dynamic from "next/dynamic";

const RegisterPage = dynamic(() => import("../components/RegisterPage"));

const Register = () => {
  return <RegisterPage />;
};

export default Register;
