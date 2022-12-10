import React, { useEffect } from "react";
import styles from "./Form.module.css"
import { useState } from "react";

const Form = (props) => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const validateUser = () => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)) {
            setErrors({
                ...errors, username: ""
            });
        } else {
            setErrors({
                ...errors, username: "invalid username"
            });
        }
    }

    const validatePass = () => {
        if (/^[A-Za-z]\w{7,14}$/.test(userData.password)) {
            setErrors({
                ...errors, password: ""
            });
        } else {
            setErrors({
                ...errors, password: "invalid password"
            });
        }
    }

    useEffect(() => {
        validateUser();
    }, [userData.username]);

    useEffect(() => {
        validatePass();
    }, [userData.password]);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div >
            <form onSubmit={submitHandler}>
                <div className={styles.div}>
                    <label htmlFor="username" >Username </label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={userData.username}
                        className={errors.username && styles.error}
                    ></input>
                    <br />
                    <span>{errors.username ? errors.username : ""}</span>
                </div>
                <div className={styles.div}>
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={userData.password}
                        className={errors.password && styles.error}
                    ></input>
                    <br />
                    <span>{errors.password ? errors.password : ""}</span>
                </div>
                <button type="submit" className={styles.ingresar}>Submit</button>
            </form>
        </div>
    )
}

export default Form;