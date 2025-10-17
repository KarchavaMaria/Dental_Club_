import styles from './FormSection.module.scss';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";

const FormSection = () => {
    const schema = yup.object().shape({
        name: yup.string().required("Имя обязательно"),
        email: yup.string().email("Адрес электронной почты должен быть действительным.").required("Email обязательно"),
        phone: yup.string().required("Phone обязательно"),
        message: yup.string().min(10, "Не менее 10 символов").required("Message обязательно"),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm({
        resolver: yupResolver(schema),
    });

    const toastOptions = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        theme: "dark",
    }

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                toast.error("Произошла ошибка при отправке", toastOptions)
                return;
            }
            toast.success("Спасибо, за отзыв!", toastOptions)
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Произошла ошибка при отправке", toastOptions)
        }
        
    }
    return (
        <section className={styles.formSection}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputForm}>
                        <input type="text" {...register("name")} placeholder="Ваше имя"/>
                        <p style={{color: "red"}}>{errors.name?.message}</p>
                    </div>
                    <div className={styles.inputForm}>
                        <input type="email" {...register("email")} placeholder="E-mail "/>
                        <p style={{color: "red"}}>{errors.email?.message}</p>
                    </div>
                    <div className={styles.inputForm}>
                        <input type="tel" {...register("phone")} placeholder="38 (000) - 000 - 00 - 00"/>
                        <p style={{color: "red"}}>{errors.phone?.message}</p>
                    </div>
                    <div className={styles.inputForm}>
                        <textarea cols={40} rows={10} {...register("message")} placeholder="Введите ваш вопрос"/>
                        <p style={{color: "red"}}>{errors.message?.message}</p>
                    </div>
                    <div className={styles.inputForm}>
                        <button type="submit"
                                disabled={isSubmitting}>{isSubmitting ? "ОТПРАВКА ЗАЯВКИ" : "ОТПРАВИТЬ ЗАЯВКУ"}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default FormSection;