import styles from './buttons.module.css';
// import { SubmitButtonWithHateoas } from './buttons';
import { ButtonProps } from './models';
import {Button} from "@components/buttons/buttons.tsx";

interface Props extends ButtonProps {
    amount: number;
    increment: () => void;
    decrement: () => void;
    change?: (amount: number) => void;
    positiveOnly?: boolean;
    id?: string;
}

export function QuantityButtons({ amount, increment, decrement, change, positiveOnly, id }: Props) {
    function handleChange(value: any) {
        if (value == '') {
            value = '0';
        }
        if (isNaN(value) || value == undefined) {
            return;
        }
        let numberValue = parseInt(value);
        if (positiveOnly && numberValue < 0) {
            numberValue = 0;
        }
        change?.(numberValue);
    }

    return (
        <div className={styles.quantity}>
            <Button handleClick={decrement}   type={'plain'}  />
            {change ? <input id={`${id}_change`} value={amount} type="number" onChange={(e) => handleChange(e.target.value)} /> : <p>{amount}</p>}
            <Button handleClick={increment}  type={'plain'} />
        </div>
    );
}
