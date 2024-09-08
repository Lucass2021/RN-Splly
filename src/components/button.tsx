import { cn } from '@/utils/cn';
import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';

const variants = {
    primary: {
        backgroundClassName: 'bg-accent active:bg-accent-dark',
        textClassName: 'text-white',
    },
    secondary: {
        backgroundClassName: 'bg-accent-light active:bg-accent',
        textClassName: 'text-accent-dark',
    }
}

type ButtonProps = {
    text: string;
    variant: keyof typeof variants;
    onPress: () => void;
    disabled?: boolean;
    className?: string;
};

export default function Button({ text, variant = 'primary', disabled, onPress, className, ...props }: ButtonProps) {
    const variantClassNames = useMemo(() => variants[variant] ?? variants.primary, [variant])

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            className={cn(
                'w-56 h-14 rounded-2xl items-center justify-center',
                variantClassNames.backgroundClassName,
                disabled && 'opacity-50',
                className
            )}
            {...props}
        >
            <Text
                className={cn(
                    'font-bold',
                    variantClassNames.textClassName,
                    disabled && 'text-opacity-50'
                )}
            >
                {text}
            </Text>
        </Pressable>
    );
}
