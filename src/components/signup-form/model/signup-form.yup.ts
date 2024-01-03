import * as Yup from 'yup';

const schema = Yup.object({
    name: Yup.string().required().min(3),
    username: Yup.string().required().min(5),
    password: Yup.string().required().min(8),
    repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match')
});

export default schema;