"use client"

import { Button, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useForm } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"

interface FormValues {
    firstName: string
    lastName: string
}

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit = handleSubmit((data) => console.log(data))

    return (
        <div className="p-4">
            <Checkbox className="text-black">Accept terms and conditions</Checkbox>
            <form onSubmit={onSubmit} className="p-4 text-black">
                <Stack gap="4" align="flex-start" maxW="sm">
                    <Field
                        label="First name"
                        invalid={!!errors.firstName}
                        errorText={errors.firstName?.message}
                    >
                        <Input
                            {...register("firstName", { required: "First name is required" })}
                            className="border-2"
                        />
                    </Field>
                    <Field
                        label="Last name"
                        invalid={!!errors.lastName}
                        errorText={errors.lastName?.message}
                    >
                        <Input
                            {...register("lastName", { required: "Last name is required" })}
                            className="border-2"
                        />
                    </Field>
                    <Button type="submit" className="border-2 p-3 w-full text-white bg-black">Submit</Button>
                </Stack>
            </form>
        </div>
    )
}

export default ContactUs;