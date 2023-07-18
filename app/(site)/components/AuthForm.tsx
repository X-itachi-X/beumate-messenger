'use client';


import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { 
    FieldValues, 
    useForm,
    SubmitHandler 
} from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const Authform = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN'){
            setVariant('REGISTER');
        } else{
            setVariant('LOGIN');
        }
    }, [variant]);



    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email:'',
            password:''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'REGISTER') {
            //Axios register
        }
        if(variant === 'LOGIN') {
            //NextAuth signin
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth social signin
    }





    return (
        <div 
            className=" 
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
 
            "
        >
            <div 
                className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant}
                    <Input id="email" 
                    label="Email" 
                    register={register} 
                    errors={errors}
                    />

                </form>
            </div>

        </div>
    );
}

export default Authform;