import Input from "../Input/Input";
import LoginRegister from "../LoginRegister/LoginRegister";
import useFormValidation from "../../hooks/useFormValidation/useFormValidation";
import { useNavigate } from "react-router-dom";

export default function Login({ name, setLoggedIn }) {
  const navigate = useNavigate();
  const { values, errors, isInputValid, isValid, handleChange } =
    useFormValidation();

  function onLogin(evt) {
    evt.preventDefault();
    navigate("/movies");
    setLoggedIn(true);
  }

  return (
    <LoginRegister name={name} isValid={isValid} onSubmit={onLogin}>
      <Input
        name="email"
        type="email"
        title="E-mail"
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        title="Пароль"
        minLength="3"
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={handleChange}
      />
    </LoginRegister>
  );
}
