import { useState } from 'react';

interface ButtonProps {
    color: string
    children: string
}

export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1)

    function increment() {
        // counter++ useState cria um novo valor para counter, não é recomendável incrementar o valor na memória pois o useState busca alterações e 
        // para casos onde a estrutura é muito grande, essa busca torna-se custosa ao React.
        setCounter(counter + 1)
    }

    return (
        <button
            type="button"
            style={{ backgroundColor: props.color }}
            onClick={increment}
        >
            {props.children} <strong>{counter}</strong>
        </button>
    );
}