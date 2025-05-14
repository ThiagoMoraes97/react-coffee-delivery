import styled from "styled-components";
import { RadioCards } from "@radix-ui/themes";

export const CheckoutContainer = styled.form`
    max-width: 70rem;
    margin: 0 auto;

    display: flex;
    gap: 2rem;
    padding-block: 2.5rem;
`; 

export const CheckoutInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;

    > h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 130%;
        color: ${({ theme }) => theme.colors.base.subtitle};
    }
`;

export const CheckoutAdressInfo = styled.div`
    background: ${({ theme }) => theme.colors.base.card};
    border-radius: 6px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > header {
        display: flex;
        gap: 0.5rem;

        > .header-info {
            font-family: "Roboto", sans-serif;
        
            > h3 {
                font-size: 1rem;
                font-weight: 400;
                line-height: 130%;
                color: ${({ theme }) => theme.colors.base.subtitle};
            }

            > p {
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 130%;
                color: ${({ theme }) => theme.colors.base.text};
            }
        }
    }

    > .input-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        > input {
            flex: 1;
        }
        
    }

    .input-group > .input-small-group:nth-child(3){
        display: flex;
        gap: 0.75rem;

        > input:nth-child(2) {
            flex: 2;
        }
    }

    .input-group > .input-small-group:nth-child(4){
        display: flex;
        gap: 0.75rem;

        > input:nth-child(2) {
            flex: 2;
        }

        > input:nth-child(3) {
           width: 3.5rem;
        }
        
    }

`;

export const CheckoutPaymentInfo = styled.div`
    background: ${({ theme }) => theme.colors.base.card};
    border-radius: 6px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    > header {
        display: flex;
        gap: 0.5rem;

        > .header-info {
            font-family: "Roboto", sans-serif;
        
            > h3 {
                font-size: 1rem;
                font-weight: 400;
                line-height: 130%;
                color: ${({ theme }) => theme.colors.base.subtitle};
            }

            > p {
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 130%;
                color: ${({ theme }) => theme.colors.base.text};
            }
        }
    }
`;

export const CheckoutItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 130%;
        color: ${({ theme }) => theme.colors.base.subtitle};
    }
`;

export const CheckoutItensInfo = styled.div`
    background: ${({ theme }) => theme.colors.base.card};
    border-radius: 6px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

 > .checkout-items-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    > .checkout-total {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        
        > p {
            font-family: "Roboto", sans-serif;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 130%;
            color: ${({ theme }) => theme.colors.base.text};

            display: flex;
            justify-content: space-between;
            align-items: center;

            > span {
                font-family: "Roboto", sans-serif;
                font-size: 1rem;
                font-weight: 400;
                line-height: 130%;
                color: ${({ theme }) => theme.colors.base.text};
            }
        }

        > p:nth-child(3) {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.base.subtitle};

            > span {
                font-size: inherit;
                font-weight: inherit;
                color: inherit;
            }
        }

    }

    > button {
        padding: 0.75rem 0.5rem;
        background: ${({ theme }) => theme.colors.product.yellow};
        border-radius: 6px;
        border: none;
        color: ${({ theme }) => theme.colors.base.white};
        font-family: "Roboto", sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 160%;
        text-transform: uppercase;

        cursor: pointer;

        &:hover {
            background: ${({ theme }) => theme.colors.product.yellowDark};
            transition: background-color 0.1s;
        }
    }
`;

export const CheckoutAdressInput = styled.input`
    background: ${({ theme }) => theme.colors.base.input};
    border: 1px solid ${({ theme }) => theme.colors.base.button};
    border-radius: 4px;
    padding: 0.75rem;
    color: ${({ theme }) => theme.colors.base.label};
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    &::placeholder {
        color: ${({ theme }) => theme.colors.base.label};
        font-family: "Roboto", sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.product.yellowDark};
        outline: none;
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.product.yellowDark};
    }
`;

export const CheckoutPaymentMethods = styled(RadioCards.Root)`
    all: unset;
    display: flex;
    gap: 0.75rem;
    width: 100%;
`;

export const CheckoutPaymentMethodsItens = styled(RadioCards.Item)`
    all: unset;
    background: ${({ theme }) => theme.colors.base.button};
    padding: 1rem;
    border-radius: 6px;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.base.text};
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    flex: auto;
    border: 1px solid transparent;
    
    &:hover {
        background: ${({ theme }) => theme.colors.base.hover};
        border: 1px solid ${({ theme }) => theme.colors.base.hover};
        color: ${({ theme }) => theme.colors.base.subtitle};
        transition: background-color 0.1s, border-color 0.1s;
    }

    &[data-state="checked"] {
        background: ${({ theme }) => theme.colors.product.purpleLight};
        border: 1px solid ${({ theme }) => theme.colors.product.purple};
        color: ${({ theme }) => theme.colors.base.subtitle};
    }
`;