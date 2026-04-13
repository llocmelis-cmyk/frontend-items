import styles from './buttons.module.css';
interface ButtonSizeProp {
    size?: 'small' | 'medium' | 'large';
}
interface ButtonTypeProp {
    type?: 'submit' | 'cancel' | 'remove' | 'neutral' | 'sync' | 'search' | 'plain' | 'form';
}
export interface ButtonClassesProps extends ButtonSizeProp, ButtonTypeProp {}

const getColor = (type: ButtonTypeProp['type']) => {
    switch (type) {
        case 'plain':
            return styles.plain;
        case 'submit':
            return styles.submit;
        case 'form':
            return styles.submit;
        case 'sync':
            return styles.sync;
        case 'cancel':
            return styles.removal;
        case 'remove':
            return styles.removal;
        default:
            return '';
    }
};

const getSize = (size: ButtonSizeProp['size']) => {
    switch (size) {
        case 'small':
            return styles.small;
        case 'medium':
            return styles.medium;
        case 'large':
            return styles.large;
        default:
            return '';
    }
};

export function ButtonClasses({ type, size }: ButtonClassesProps) {
    let classes = getColor(type) || 'submit';
    classes += ' ' + getSize(size) || 'large';
    classes += ' ' + styles.hateoasButton;

    return classes;
}
