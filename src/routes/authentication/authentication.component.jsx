import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { AuthenticationContainer } from './authentication.styles';
import "./authentication.styles.scss";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(()=>{
    if(currentUser) {
      return navigate("/");
    }
  }, [currentUser, navigate])
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
