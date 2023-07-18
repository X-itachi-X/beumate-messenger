'use client';

import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER';

const Authform = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>Auth Form2!</div>
    );
}

export default Authform;