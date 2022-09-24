import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  
  const values = {
    email: '',
    password: '',
  };

export const LoginForm = () => {
    // const [statePass, setStatePass] = useState(false);
    // const toggleBtn = () => {
    //   setStatePass(prevState => !prevState);
    // };
    // // const dispatch = useDispatch();
   
    // const handleSubmit = ({ email, password }, { resetForm }) => {
    //   const auth = getAuth();
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then(userCredential => {
    //       const userAut = userCredential.user;
    //       const name = userAut.displayName;
    //       dispatch(
    //         setUser({
    //           user: { name: name },
    //           id: userAut.uid,
    //         })
    //       );
    //       dispatch(setAuthToken(userAut.accessToken));
    //     //   toast.success(<FormattedMessage id='welcome'/>);
    //       resetForm();
    //     })
    //     .catch(error => {
    //     //   toast.error(error.message);
    //       console.log(error.code);
    //       console.log(error.message);
    //     });
    // };
  
    return (
      <Formik
        initialValues={values}
        validationSchema={schema}
        // onSubmit={handleSubmit}
      >
        <div>
          <div>
            <div>
            </div>
            <div>
              <div>
                <Form autoComplete="off">
                  <label htmlFor="email">
                    <input type="email" name="email"
                    //  placeholder={intl.formatMessage({id: "email"})}
                      />
                  </label>
                  <label htmlFor="password">
                    <div>
                      <input
                        // type={statePass ? 'text' : 'password'}
                        name="password"
                        // placeholder={} 
                      />
                      <button type="button" 
                    //   onClick={toggleBtn}
                      >
                        {/* {statePass ? <IoEyeOff /> : <IoEyeOutline />} */}
                      </button>
                    </div>
                  </label>
                  <button type="submit">
                  </button>
                </Form>
              </div>
            </div>
          </div>
            <p>
              <Link to="/register"/>
            </p>
        </div>
      </Formik>
    );
  };