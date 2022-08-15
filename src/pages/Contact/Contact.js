import {
    WrapperContentContact, WrapperTextLeftContactTop,
    WrapperTextRightContactTop, WrapperFormContact,
    InputFormContact, WrapperFormInputLabel, TextAreaContact,
    ButtonForm
} from './Contact.style';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { WrapperAllPages } from '../../global/Styles';
import GoScrollTop from '../../components/GoScrollTop/GoScrollTop';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MessageSendEmail from '../../components/MessageSendEmail/MessageSendEmail';

export default function Contact() {
    const [open, setOpen] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p0ka32q', 'template_wiqivhe', form.current, '-QM_59DwS51owAPXD')
            .then((result) => {
                setOpen(true);
            }, (error) => {
                setOpen(false);
            });
    };

    return (
        <WrapperAllPages>
            <GoScrollTop />
            <Header />
            <WrapperContentContact>
                <WrapperTextLeftContactTop>
                    <h2>Entre em Contato</h2>
                </WrapperTextLeftContactTop>
                <WrapperTextRightContactTop>
                    <p>
                        Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar.
                        Atualmente estou procurando por um cargo e aberto para várias oportunidades.
                        Minha preferência é uma oportunidade em uma empresa Britânica. Mas também
                        estou feliz em escutar sobre oportunidades remotas. Sou uma pessoa trabalhadora
                        e positiva que sempre fará as tasks com um senso de propósito e atenção aos
                        detalhes. Fique livre para checar meu perfis abaixo e entrar em contato
                        utilizando o formulário.
                    </p>
                </WrapperTextRightContactTop>
            </WrapperContentContact>

            <WrapperContentContact>
                <WrapperTextLeftContactTop>
                    <h2>Contato</h2>
                </WrapperTextLeftContactTop>
                <WrapperFormContact ref={form} onSubmit={sendEmail}>
                    <WrapperFormInputLabel>
                        <label>Nome</label>
                        <InputFormContact
                            type='text'
                            name='user_name'
                        />
                    </WrapperFormInputLabel>
                    <WrapperFormInputLabel>
                        <label>E-mail</label>
                        <InputFormContact
                            type='text'
                            name='user_email'
                        />
                    </WrapperFormInputLabel>
                    <TextAreaContact>
                        <label>Menssagem</label>
                        <textarea
                            name='message'
                            rows={3}
                            cols={100}
                            maxLength={300}
                        >
                        </textarea>
                    </TextAreaContact>
                    <ButtonForm
                        type='submit'
                        value='Send'
                    >ENVIAR</ButtonForm>
                </WrapperFormContact>
            </WrapperContentContact>
            <Footer />
            {
                open &&
                <MessageSendEmail
                    open={open}
                    setOpen={setOpen}
                />
            }
        </WrapperAllPages>
    )
};