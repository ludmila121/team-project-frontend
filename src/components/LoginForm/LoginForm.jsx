import { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'utils/shemas/AuthSchema';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

import {
  MainLogForm,
  Titel,
  FormField,
  InputEmailWraper,
  InputPasswordWraper,
  InputForm,
  IconCheck,
  IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
  ToRegister,
  LinkStyled,
  OnIcon,
  OffIcon,
} from './LoginForm.styled';
import { theme } from 'styles';
import { Check, Cross } from 'components/icons';

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const {isLoggedIn} = useAuth()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    console.log("values:", values)
    const data = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(data));
    // resetForm();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  return (
    <MainLogForm>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({errors, touched}) => (
          <Form>

            <Titel>Login</Titel>

            <FormField>
              <InputEmailWraper style={{borderColor:  !touched.email ? `${theme.colors.blue}` : errors.email  ? `${theme.colors.red}` : `${theme.colors.green}`}}>
              <InputForm
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="on"
              />
              </InputEmailWraper>
              { !errors.email && touched.email ? (<SuccessMessage>Success, email is valid!</SuccessMessage>) : null }

              { !touched.email ? null : !errors.email ? 
              <IconCheck ><Check/></IconCheck> :
               <IconCross ><Cross/></IconCross>}

              <ErrorMess name="email" component="p" />
            </FormField>

            <FormField>
              <InputPasswordWraper style={{borderColor: !touched.password ? `${theme.colors.blue}` : errors.password  ? `${theme.colors.red}` : `${theme.colors.green}`}}>
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="on"
              />
              </InputPasswordWraper>
              <span id="visibilityBtn" onClick={togglePassword}>
                {passwordShow ? <OnIcon /> : <OffIcon />}
              </span>
              { !errors.password && touched.password? (<SuccessMessage>Success, password is valid!</SuccessMessage>) : null }

              { !touched.password ? null : !errors.password ? 
              <IconCheck ><Check/></IconCheck> :
               <IconCross ><Cross/></IconCross>}

              <ErrorMess name="password" component="p" />
            </FormField>

            <div>
              <Button type="submit">Login</Button>
            </div>

            <ToRegister>
              Don't have an account?
              <LinkStyled to="/register">Register</LinkStyled>
            </ToRegister>
          </Form>
        )}
      </Formik>
    </MainLogForm>
  );
}
