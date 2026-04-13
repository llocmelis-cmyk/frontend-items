import { useState } from 'react';

import styles from './buttons.module.css';

import { ButtonProps } from './models';
import { ButtonClasses, ButtonClassesProps } from '@components/buttons/ButtonClasses.tsx';

interface Props extends ButtonProps {
    handleClick?: () => void | Promise<any>;
    confirm?: boolean;
    type?: any;
}

interface WithTextProps extends Props {
    text: string;
}

interface WithOptionalTextProps extends Props {
    text?: React.ReactNode;
}

export function Button({ handleClick, confirm, type, ...props }: Props) {
    async function onClick(e: any) {
        if (type != 'form' && type != "submit") {
            e.preventDefault();
        }

        if (props.disabled) {
            return;
        }
        if (handleClick) {
            await handleClick();
        }
    }

    if (confirm) {
        return <Button handleClick={handleClick} {...props} />;
    }

    return <button {...props} />;
}


export function CopyButton({ copyText }: { copyText: string }) {
    return (
        <Button
            handleClick={() => {
                navigator.clipboard.writeText(copyText);
            }}
        >
            Copy ✄
        </Button>
    );
}


interface SubmitButtonWithHateoasProps extends ButtonClassesProps {
    text?: any;
    obj?: { data?: any; relation?: any };
    handleClick?: () => void | Promise<any>;
    confirm?: boolean;
    skipHateoas?: boolean;
    refresh?: () => void | Promise<any>;
}

export function RemovalButton({ text, ...props }: WithTextProps) {
    return (
        <Button {...props} >
            {text}
        </Button>
    );
}
