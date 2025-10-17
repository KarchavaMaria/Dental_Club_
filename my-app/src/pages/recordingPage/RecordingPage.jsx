import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import doctors from "../teamPage/data/team";
import styles from "./RecordingPage.module.scss";
import {toast} from "react-toastify";

const RecordingPage = () => {
    const today = new Date().toISOString().split("T")[0];

    const schema = yup.object().shape({
        name: yup.string().required("Имя обязательно"),
        phone: yup.string().matches(/^[0-9+\-()\s]+$/, "Некорректный телефон").required("Phone обязательно"),
        doctor: yup.string("Выберите врача"),
        date: yup.date().required("Выберите дату"),
    })

    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        resolver: yupResolver(schema),
    })

    const toastOptions = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        theme: "dark",
    }

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/recording/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if (!response.ok) {
               toast.error("Произошла ошибка", toastOptions)
                return;
            }
            toast.success("Спасибо за запись, мы скоро Вам перезвоним!", toastOptions)
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Произошла ошибка", toastOptions)
        }
    }
    return (
        <section className={styles.recordingPage}>
            <div className={styles.formRecording}>
                <div className={styles.title}>
                    <h2>ЗАПИСЬ НА ПРИЕМ</h2>
                </div>
                <div className={styles.formSection}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputForm}>
                            <input id="name" name="name" type="text" {...register("name")} placeholder="Имя"/>
                            <p style={{color: "red"}}>{errors.name?.message}</p>
                        </div>
                        <div className={styles.inputForm}>
                            <input id="phone" name="phone" type="number" {...register("phone")}
                                   placeholder="38(000) - 000 - 00 - 00"/>
                            <p style={{color: "red"}}>{errors.phone?.message}</p>
                        </div>
                        <div className={styles.inputForm}>
                            <select id="doctor" {...register("doctor")}>
                                <option value="" selected>Выберите врача</option>
                                {doctors.map((doc, index) => (
                                    <option key={index} value={doc.name}>{doc.name}</option>))}
                            </select>
                        </div>

                        <div className={styles.inputForm}>
                            <input id="date" name="date" type="date" min={today} {...register("date")}/>
                            <p style={{color: "red"}}>{errors.date?.message}</p>
                        </div>
                        <button className={styles.submit} type="submit">Записаться</button>
                    </form>
                </div>
            </div>
        </section>

    )

}
export default RecordingPage;