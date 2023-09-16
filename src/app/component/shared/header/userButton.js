"use client";
import { useState, useEffect } from "react";
import { useLogin } from "@/hooks/useLogin";

import "styles/components/userButton.scss";

import Link from "next/link";

import SvgIcon from "../SvgIcon";
import MyButton from "../MyButton";

const UserButton = () => {
    const [showUserOverlay, setShowUserOverlay] = useState(false);
    const onClickUserBtn = (e) => {
        setShowUserOverlay(!showUserOverlay);
    };
    const sideIconSize = 25;

    // useState
    const [loginState, setLoginState] = useState(false);

    // useLogin
    const isLogin = useLogin.getState().isLogin;
    const loginEmail = useLogin.getState().loginEmail;
    const loginUsername = useLogin.getState().loginUsername;
    const logoutFunc = useLogin((state) => state.logout);

    const isLoginListener = useLogin.subscribe(
        (e) => {
            setLoginState(e.isLogin);
        },
        (state) => state.isLogin
    );

    useEffect(() => {
        setLoginState(isLogin);
    }, []);

    const onClickLogout = (e) => {
        logoutFunc();
        location.reload();
    };

    return (
        <div className={"centerFlex userBtn"}>
            <div onClick={onClickUserBtn} className="userBtnIcon">
                <SvgIcon
                    src={"/svg/user-solid-black.svg"}
                    width={sideIconSize}
                    height={sideIconSize}
                />
            </div>
            <div className={"centerFlex userOverlay " + (showUserOverlay ? "" : "hide")}>
                {loginState ? (
                    <>
                        <span className="mb-1 lead loginUsername">{loginUsername}</span>
                        <span className="mb-3 loginEmail">{loginEmail}</span>
                        <MyButton text={"Logout"} classes={"logoutBtn"} onClick={onClickLogout} />
                    </>
                ) : (
                    <>
                        Looks Like you are not logged in yet. <br />
                        <Link
                            className="hover-gold"
                            style={{ color: "#3087ff" }}
                            href={"/focs/login?show=login"}
                            onClick={onClickUserBtn}
                            >
                            <strong>Log in here.</strong>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default UserButton;
