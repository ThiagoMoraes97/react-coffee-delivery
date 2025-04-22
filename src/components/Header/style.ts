import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70rem;
    height: 6.5rem;
    margin: 0 auto;
    padding: 2rem 0;
`;

export const OrderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: ${({theme}) => theme.colors.product.purpleLight};
    color: ${({theme}) => theme.colors.product.purpleDark};
    padding: 0.5rem;
    border-radius: 6px;

    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    > svg {
        color: ${({theme}) => theme.colors.product.purple};
    }
`;

export const Cart = styled.button`
    background-color: ${({theme}) => theme.colors.product.yellowLight};
    color: ${({theme}) => theme.colors.product.yellowDark};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
`;
