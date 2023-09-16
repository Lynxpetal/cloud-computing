// Hooks
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";

// NodeJS Libraries
import toast from "react-hot-toast";

// Components
import RequiredInput from "@/components/contactUs/requiredInput";
import MyButton from "@/components/shared/MyButton";

// Api
import { appendEncryptJsonData } from "@/lib/JSONhandler";
import { encryptAES } from "@/lib/passwordEncryption";
import { emailExists } from "@/lib/registerHandler";

const RegisterForm = ({ classes, showLogin, setShowLogin }) => {
    classes ??= "";
    const toggleShowLogin = () => {
        setShowLogin(!showLogin);
    };

    // Register Account
    const [registerInputs, setRegisterInputs] = useState({
        regUsername: "",
        regEmail: "",
        regPassword: "",
        regConfirmPassword: "",
    });
    const onChangeRegister = (e) => {
        setRegisterInputs({ ...registerInputs, [e.target.name]: e.target.value });
    };

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        validateRegister();
    };

    const validateRegister = async () => {
        let valid = true;
        let errorMessage;
        let toBeFocused;

        // Username Validation
        if (registerInputs.regUsername.length < 4) {
            valid = false;
            errorMessage ??= "Username must have at least 4 characters. ";
            toBeFocused ??= "regUsername";
        }

        // Email validation
        else if (registerInputs.regEmail.length == 0) {
            valid = false;
            errorMessage ??= "Email is required. ";
            toBeFocused ??= "regEmail";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerInputs.regEmail)) {
            valid = false;
            errorMessage ??= "Invalid Email format. ";
            toBeFocused ??= "regEmail";
        }

        // Password validation
        else if (registerInputs.regPassword.length < 8) {
            valid = false;
            errorMessage ??= "Password must have at least 8 characters. ";
            toBeFocused ??= "regPassword";
        } else if (registerInputs.regPassword.length > 50) {
            valid = false;
            errorMessage ??= "Password must not be more than 50 characters. ";
            toBeFocused ??= "regPassword";
        }

        // Confirm Password Validation
        else if (registerInputs.regPassword != registerInputs.regConfirmPassword) {
            valid = false;
            errorMessage ??= "Password and Confirm Password doesn't match. ";
            toBeFocused ??= "regConfirmPassword";
        }

        // Check if email Exists
        else if (await emailExists(registerInputs.regEmail)) {
            valid = false;
            errorMessage ??= "A user with this email was aready registered. ";
            toBeFocused ??= "regEmail";
        }

        if (valid) {
            // Client side encryption on password
            let encryptedPassword = encryptAES(registerInputs.regPassword);

            // Server side encryption on password
            appendEncryptJsonData(
                "registeredUsers.json",
                {
                    username: registerInputs.regUsername,
                    email: registerInputs.regEmail,
                    password: encryptedPassword,
                },
                "password"
            ).then((res) => {
                if (res.status == 200) {
                    // This can't work becuz of invalid hook calls (https://stackoverflow.com/questions/67012820/zustand-error-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of)
                    // const loginFunc = useLogin((state) => state.login);
                    // loginFunc(loginInputs.loginEmail);

                    // Use this instead
                    useLogin.setState({ isLogin: true, loginEmail: registerInputs.regEmail, loginUsername: registerInputs.regUsername });
                    toast.success("Account Registered Successfully!");
                } else {
                    toast.error("Something went wrong on the server!");
                }
            });
        } else {
            toast.error(errorMessage);
            if (toBeFocused) {
                document.querySelector("#" + toBeFocused).focus();
                document.querySelector("#" + toBeFocused).classList.add("errorFocus");
            }
        }
    };

    const onBlurRegister = (e) => {
        e.target.classList.remove("errorFocus");
        setRegisterInputs({ ...registerInputs, [e.target.name]: e.target.value });
    };
    return (
        <div
            id="registerForm"
            className={"col mb-3 formContainer registerForm " + classes + (showLogin ? " hide" : "")}>
            <h1 className="display-6">Register an Account</h1>
            <form onSubmit={onRegisterSubmit}>
                <RequiredInput
                    isTextarea={false}
                    label="Username"
                    type="text"
                    name="regUsername"
                    id="regUsername"
                    placeholder={"John Doe"}
                    onChange={onChangeRegister}
                    onBlur={onBlurRegister}
                />
                <RequiredInput
                    isTextarea={false}
                    label="Email Address"
                    type="text"
                    name="regEmail"
                    id="regEmail"
                    placeholder={"myname@email.com"}
                    onChange={onChangeRegister}
                    onBlur={onBlurRegister}
                />
                <RequiredInput
                    isTextarea={false}
                    label="Password"
                    type="password"
                    name="regPassword"
                    id="regPassword"
                    placeholder={"xxxxxxxx"}
                    onChange={onChangeRegister}
                    onBlur={onBlurRegister}
                />
                <RequiredInput
                    isTextarea={false}
                    label="Confirm Password"
                    type="password"
                    name="regConfirmPassword"
                    id="regConfirmPassword"
                    placeholder={"xxxxxxxx"}
                    onChange={onChangeRegister}
                    onBlur={onBlurRegister}
                />
                <div className="row centerFlex">
                    <MyButton
                        classes={"mt-4 h4 formSubmitButton"}
                        text="Register now"
                        onClick={onRegisterSubmit}
                    />
                    <div className="centerFlex mt-1 registerJumpSection">
                        <small className="text-muted">
                            Already have an account? <br />
                            <span
                                className="hover-gold boxJump registerJump"
                                onClick={(e) => {
                                    toggleShowLogin();
                                }}>
                                Login here.
                            </span>
                        </small>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
