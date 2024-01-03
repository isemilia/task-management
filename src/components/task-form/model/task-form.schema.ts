import * as Yup from 'yup';

const schema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string(),
    status: Yup.number().required()
});

export default schema;