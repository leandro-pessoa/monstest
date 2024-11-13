
// retorna uma série de estilos que aplicarão o flexbox, com os seus parêmetros definindo as características dele
export const flex = (direction?: string, justify?: string, align?: string, gap?: string) => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `
}