import * as Yup from 'yup';

const schema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required()
});

export default schema;