import styled from "styled-components";
import CB from "../../commons/Checkbox";


export const Container = styled.div`
    
`;

// 实现圆形按钮复选框
// 复选框 <label><input> + <span></label>
// 隐藏 <input> 设置<span>的css
export const Checkbox = styled(CB)`
    display:inline-block;
    margin-bottom: 10px;
    
    &:hover input + .checkmark {
        border: 1px solid ${props => props.theme.colors.primary};
    }
    /*
    https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible
    focus-visible该伪类只有在键盘聚焦时选择,focus则是任何聚焦行为都会执行
    */
    input:focus-visible + .checkmark {
        box-sizing:border-box;
        line-height: 30px;
        border: 2px solid ${props => props.theme.colors.secondary};
    }
    /* 设置checkd时的样式 */
    input:checked + .checkmark {
        background-color: ${props => props.theme.colors.primary};
        color: #ececec;
    }

    & input:checked + .checkmark::after {
        display: block;
    }

    label {
        display:inline-block;
        position:relative;
        cursor: pointer;
        font-size: 22px;
        /* 多个浏览器设置 */
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        width: 35px;
        height: 35px;
        font-size: 0.8em;
        margin-bottom: 8px;
        margin-right: 8px;
        border-radius: 50%;
        text-align:center;
    }

    input {
        position:absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position:absolute;
        top:0;
        left:0;
        width: 35px;
        height: 35px;
        font-size: 0.8em;
        border-radius: 50%;
        box-sizing:border-box;
        line-height: 35px;
        text-align:center;
        color: ${props => props.theme.colors.primary};
        background: #ececec;
        border: 1px solid transparent;
    }
`;

export const Title = styled.h4`
    margin-top: 2px;
    margin-bottom: 20px;
`;