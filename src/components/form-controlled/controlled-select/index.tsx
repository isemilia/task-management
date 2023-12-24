import Select from "@/ui/select";
import { FC } from "react";
import { Controller } from 'react-hook-form';

import { ICSelectProps } from "./model/controlled-select.type";

const CSelect: FC<ICSelectProps> = ({ name, options, ...rest }) => {
    return (
        <Controller
            name={name}
            render={({ field: { onChange, onBlur, value } }) => {
                return (
                    <Select
                        {...rest}
                        options={options}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )
            }}
        />
    )
}

export default CSelect