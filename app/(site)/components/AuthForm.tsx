'use client';

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
                

            
            
            
            "
        
        
        >


        </div>
    );
}

export default Authform;