import {ButtonProps} from "./button.types.ts";

export function Button({name, onClick, variant}: ButtonProps) {

    return(
        <div onClick={onClick}>
            <p>{name}{variant}</p>
        </div>
    )
}
