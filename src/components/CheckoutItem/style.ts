import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    display: flex;
    align-items: top;
    border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
    padding: 0.5rem 0.25rem 2rem;
    width: 23rem;

    > img {
        width: 4rem;
        height: 4rem;
        margin-right: 1.25rem;
    }

    > .checkout-item-price {

        > span {
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            font-weight: 700;
            line-height: 130%;
            color: ${({ theme }) => theme.colors.base.text};
            text-align: right;
        }
    }
`;

export const CheckoutItensContent = styled.div`
    margin-right: auto;

    > h3 {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
        color: ${({ theme }) => theme.colors.base.subtitle};
        margin-bottom: 0.25rem;
    }

    > .buttons-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const CheckoutItemQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.base.button};
    border-radius: 6px;

    > span {
        color: ${({ theme }) => theme.colors.base.title};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0;
    }

    > button {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.colors.product.purple};
        line-height: 0;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.product.purpleDark};
            transition: color 0.2s;
        }
    }
`;

export const CheckoutItemRemove = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: ${({ theme }) => theme.colors.base.button};
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.base.text};
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;

    > svg {
        color: ${({ theme }) => theme.colors.product.purple};
        line-height: 0;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.base.hover};
        color: ${({ theme }) => theme.colors.base.subtitle};
        transition: background-color 0.1s, color 0.1s;

        > svg {
            color: ${({ theme }) => theme.colors.product.purpleDark};
        }
    }
`;