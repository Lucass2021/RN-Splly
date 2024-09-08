
import Button from "@/components/button";
import Input from "@/components/input";
import { FormProvider, useForm } from "react-hook-form";
import { Text, View } from "react-native";

export default function Index() {
    console.log("app")

    const form = useForm();

    const {
        handleSubmit,
        formState: { errors },
        setValue
    } = form

    const handleLogin = (data: any) => {
        console.log("data handleLogin", data)
    }


    return (
        <View className="flex-1 justify-center items-center px-10">
            <Text>App</Text>

            <View>
                <FormProvider {...form}>
                    <Input name="email" placeholder="E-mail" />
                    <Input name="password" placeholder="Senha" secureTextEntry />
                </FormProvider>
            </View>

            <Button
                text='Enviar'
                variant='primary'
                onPress={() => handleSubmit(handleLogin)()}
                className='w-full bg-blue-500 mt-10'
            />
        </View>
    )
}