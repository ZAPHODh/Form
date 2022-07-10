import { Form, Input,Checkbox, Relevant } from 'informed';
import newConsolidedUser from './newConsolidedUser';
import './form.css';
import * as Yup from 'yup';
const onSubmit = ({ values }) => {
    let result = JSON.stringify(values,null,2)
    console.log(result)
    newConsolidedUser(result);
    };
const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Voce precisa escolher um nome."),
    idade: Yup.number().positive().required("Voce precisa por a sua idade."),
    phone: Yup.string().required("Voce precisa digitar seu número de celular."),
    born: Yup.string().required("Voce precisa por sua data de nascimento.."),
    email: Yup.string().email().required("Voce precisa por a seu email."),   
})

const FormFunction = () => (
  <Form className='container' onSubmit={onSubmit}>
    <Input className='input' name="name" label="Nome" placeholder="Seu nome..." />
    <Input className='input'  name="age" type="number" label="Idade" placeholder="Sua idade..."/>
    <Input className='input' name="phone" label="Celular" formatter="+55 (##)-#####-####" placeholder="Seu celular..." />
    <Input className='input' name="born" label="Nascimento" formatter="##/##/####" placeholder= "Data de nascimento..."/>
    <Input className='input' name="email" label="E-mail" placeholder= "Seu email..."/>
    <button className="btn" type="submit">Enviar</button>
  </Form>
);

export default FormFunction;