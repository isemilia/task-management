import * as Yup from 'yup';

const schema = Yup.object({
    name: Yup.string().required().min(2),
    username: Yup.string().required().min(3),
    password: Yup.string().required().min(6),
    repeatPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Passwords do not match')
});

export default schema;