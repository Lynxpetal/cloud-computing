// Hooks
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";

// NodeJS Libraries
import Link from "next/link";
import toast from "react-hot-toast";

// Components
import RequiredInput from "@/components/contactUs/requiredInput";
import MyButton from "@/components/shared/MyButton";

// Api
import { encryptAES } from "@/lib/passwordEncryption";
import { loginValid } from "@/lib/registerHandler";

const LoginForm = ({ classes, showLogin, setShowLogin }) => {
    classes ??= "";
    const toggleShowLogin = () => {
        setShowLogin(!showLogin);
    };

    // Login
    const [loginInputs, setLoginInputs] = useState({
        loginEmail: "",
        loginPassword: "",
    });
    const onChangeLogin = (e) => {
        setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
    };

    const validateLogin = async () => {
        let valid = true;
        let errorMessage;
        let toBeFocused;

        // Email
        if (loginInputs.loginEmail.length == 0) {
            valid = false;
            errorMessage ??= "Email cannot be empty. ";
            toBeFocused ??= "loginEmail";
        }

        // Password
        else if (loginInputs.loginPassword.length == 0) {
            valid = false;
            errorMessage ??= "Password cannot be empty. ";
            toBeFocused ??= "loginPassword";
        }

        if (valid) {
            // Client side encryption on password
            let encryptedPassword = encryptAES(loginInputs.loginPassword);

            // Server side encryption on password
            loginValid(loginInputs.loginEmail, encryptedPassword).then((res) => {
                if (res.status == 200) {
                    if (res.message.valid) {
                        // This can't work becuz of invalid hook calls (https://stackoverflow.com/questions/67012820/zustand-error-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of)
                        // const loginFunc = useLogin((state) => state.login);
                        // loginFunc(loginInputs.loginEmail);

                        // Use this instead
                        useLogin.setState({
                            isLogin: true,
                            loginEmail: res.message.email,
                            loginUsername: res.message.username,
                        });
                        toast.success("Login Successful!");
                        document.querySelector("#homeRedirect").click();
                    } else {
                        toast.error("Email or Password is incorrect!");
                        document.querySelector("#loginEmail").focus();
                        document.querySelector("#loginEmail").classList.add("errorFocus");
                    }
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

    const onLoginSubmit = (e) => {
        e.preventDefault();
        validateLogin();
    };

    const onBlurLogin = (e) => {
        e.target.classList.remove("errorFocus");
        setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div
                id="loginForm"
                className={
                    "col mb-3 formContainer loginForm " + classes + (showLogin ? "" : " hide")
                }>
                <h1 className="display-6">Login</h1>
                <form onSubmit={onLoginSubmit}>
                    <RequiredInput
                        isTextarea={false}
                        label="Email Address"
                        type="text"
                        name="loginEmail"
                        id="loginEmail"
                        placeholder={"myname@email.com"}
                        onChange={onChangeLogin}
                        onBlur={onBlurLogin}
                    />
                    <RequiredInput
                        isTextarea={false}
                        label="Password"
                        type="password"
                        name="loginPassword"
                        id="loginPassword"
                        placeholder={"xxxxxxxx"}
                        onChange={onChangeLogin}
                        onBlur={onBlurLogin}
                    />
                    <div className="row centerFlex">
                        <MyButton
                            classes={"mt-4 h4 formSubmitButton"}
                            text="Login now"
                            onClick={onLoginSubmit}
                        />
                        <div className="centerFlex mt-3 registerJumpSection">
                            <small className="text-muted">
                                Don't have an account? <br />
                                <span
                                    className="hover-gold boxJump registerJump"
                                    onClick={(e) => {
                                        toggleShowLogin();
                                    }}>
                                    Register an Account here.
                                </span>
                            </small>
                        </div>
                    </div>
                </form>
            </div>
            <Link href={"/focs"} style={{ display: "none" }} id="homeRedirect"></Link>
        </>
    );
};

export default LoginForm;
