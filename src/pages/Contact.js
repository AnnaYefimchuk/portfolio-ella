import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export function Contact() {
    const form = useRef();
    const [info, setInfo] = useState("");
    const [data, setData] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    })
    

    const handleChangeName = e => {
        setData(existingValues => ({
            ...existingValues,
            name: e.target.value,
        }))
    }

    const handleChangePhone = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setData(existingValues => ({
            ...existingValues,
            number: value,
        }))
    };

    const handleChangeEmail = e => {
        setData(existingValues => ({
            ...existingValues,
            email: e.target.value,
        }))
    }

    const handleChangeMessage = e => {
        setData(existingValues => ({
            ...existingValues,
            message: e.target.value,
        }))
    }

    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
    }, [info]);

    const sendEmail = (e) => {
        e.preventDefault();

        if (data.name.length > 2 && data.number.length > 9 && data.email.length > 5) {
            emailjs.sendForm('service_wb554je', 'template_9i7vl1p', form.current, 'XHTVsS6lmvH3UWac2')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setInfo("Повідомлення було надіслано")
            setData(e => ({
                ...e,
                name: "",
                number: "",
                email: "",
                message: ""
            }));

        } else {
            setInfo("Будь ласка, перевірте чи введені дані в полі Імя, телефон та електронна пошта")
        }
    };

    return (
        <div className="contactBlock">
            <div className='contactInfoLeft'>
                <h1>Зв'яжіться зі мною</h1>
                <p className='contactInfoLeftP'>Якщо у вас є будь-які запитання, не соромтеся зв’язатися зі мною, і я зв’яжусь з вами якомога швидше.</p>
                <table>
                    <tbody>
                        <tr>
                            <th> Години:</th>
                            <td> Понеділок, вівторок, четвер, субота</td>
                        </tr>
                        <tr>
                            <th>Контакти:</th>
                            <td> +38(093)763-79-89</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>anna.yefimchuk@gmail.com</td>
                        </tr>
                        <tr>
                            <th>Розташування:</th>
                            <td>метро Кловська</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='contactInfoRight'>
                <form ref={form} onSubmit={sendEmail} className="contactInfoRight">
                    <input type="text" name="user_name" value={data.name} onChange={handleChangeName} placeholder="Введіть Ваше повне ім'я*" />
                    <input type="text" name="user_phone" value={data.number} onChange={handleChangePhone} placeholder="Введіть Ваш номер телефону*" />
                    <input type="email" name="user_email" value={data.email} onChange={handleChangeEmail} placeholder="Введіть Вашу електронну пошту*" />
                    <textarea type="text" name="message" value={data.message} onChange={handleChangeMessage} placeholder="Введіть Ваше повідомлення" />
                    <p className='contactInfoRigrtP'>{info}</p>
                    <button className="btnToTheLessons">Надіслати</button>
                </form>
            </div>

        </div>
    )
}