import React, { useState } from "react";

interface IProps {
    className?: string;
    label: string;
    handleOnChange(label: string): void;
}
// { className, label, handleOnChange }: IProps 函数参数结构
const Checkbox = ({ className, label, handleOnChange }: IProps) => {
    /**
     * @className 外部容器div的类名
     * @label 该复选框对应的文本标签
     * @handleOnChange 处理复选框内容变化的函数
     */
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckboxChange = () => {
        setIsChecked(!isChecked);
        handleOnChange(label);
    }
    return (<div className={className}>
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                value={label}
                onChange={toggleCheckboxChange}
            />
            <span className="checkmark">{label}</span>
        </label>
    </div>);
}

export default Checkbox;