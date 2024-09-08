import { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextInputProps as RnTextInputProps, Text, TextInput, View } from 'react-native';

type InputProps = {
    name: string;
} & RnTextInputProps

export default function Input({ className, name, secureTextEntry, ...props }: InputProps) {
    const textInputRef = useRef<TextInput>(null);

    const { control } = useFormContext()

    const {
        field: { onChange, onBlur, value },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: '',
    })

    return (
        <View className='w-full'>
            <TextInput
                ref={textInputRef}
                className={`mt-10 w-64 text-body text-base border-b border-black pb-2 ${className}`}
                textAlign='center'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                multiline={!secureTextEntry}
                secureTextEntry={secureTextEntry ?? true}
                blurOnSubmit
                {...props}
            />
            {error && (
                <Text className='font-semibold text-center text-red-500 text-sm mt-3'>
                    {error.message}
                </Text>
            )}
        </View>
    )
}
