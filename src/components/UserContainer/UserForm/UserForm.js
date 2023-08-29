import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi.mjs";

import styles from "./UserForm.module.css"
import {userService} from "../../../services/userService";
import {userValidator} from "../../../validators/userValidator";

const UserForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const save = async (user) => {
        await userService.create(user);
        reset()
        console.log(user)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(save)}>
            <label><input type={"text"} {...register('name')} placeholder="Name"/></label>
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            <label><input type={"text"} {...register('username')} placeholder="Username"/></label>
            {errors.username && <span className={styles.error}>{errors.username.message}</span>}
            <label><input type={"text"} {...register('email')} placeholder="Email"/></label>
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            <button type={"submit"}>Save</button>
        </form>
    );
};

export {UserForm};