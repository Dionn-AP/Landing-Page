import {
    WrapperContentContact, WrapperTextLeftContactTop,
    WrapperTextRightContactTop, WrapperFormContact,
    InputFormContact, WrapperFormInputLabel, TextAreaContact,
    ButtonForm
} from './Contact.style';
import { WrapperAllPages } from '../../global/Styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Contact() {

    return (
        <WrapperAllPages>
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
                <WrapperFormContact>
                    <WrapperFormInputLabel>
                        <label>Nome</label>
                        <InputFormContact />
                    </WrapperFormInputLabel>
                    <WrapperFormInputLabel>
                        <label>E-mail</label>
                        <InputFormContact />
                    </WrapperFormInputLabel>
                    <TextAreaContact>
                        <label>Menssagem</label>
                        <textarea
                            rows={3}
                            cols={100}
                            maxLength={300}
                        >
                        </textarea>
                    </TextAreaContact>
                    <ButtonForm>ENVIAR</ButtonForm>
                </WrapperFormContact>
            </WrapperContentContact>
            <Footer />
        </WrapperAllPages>
    )
};