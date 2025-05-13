import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    padding: 0 1.25rem 1.25rem;
    background: ${({ theme }) => theme.colors.base.card};
    max-width: 16rem;
    border-radius: 6px 36px 6px 36px;
    text-align: center;

    > img {
        margin-top: -20px;
        margin-bottom: 1rem;
        width: 7.5rem;
        height: 7.5rem;
    }

    > h3 {
        color: ${({ theme }) => theme.colors.base.subtitle};
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 0.5rem;
    }

    p {
        color: ${({ theme }) => theme.colors.base.label};
        font-family: "Roboto", sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        margin-bottom: 2rem;
    }
`;

export const CoffeeTagsGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 1rem;
`;

export const CoffeeTags = styled.span`
    background: ${({ theme }) => theme.colors.product.yellowLight};
    color: ${({ theme }) => theme.colors.product.yellowDark};
    font-family: "Roboto", sans-serif;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
`;

export const CoffeeCartInfo = styled.div`
    display: flex;
    align-items: center;

    > .coffee-price {
        display: flex;
        align-items: baseline;
        color: ${({ theme }) => theme.colors.base.text};
        line-height: 130%;
        margin-right: auto;

        > small {
            font-family: "Roboto", sans-serif;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            margin-right: 0.25rem;
        }

        > span {
            font-family: "Baloo 2", sans-serif;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 800;
        }
    }

    > .coffee-quantity {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: ${({ theme }) => theme.colors.base.button};
        border-radius: 6px;
        margin-right: 0.5rem;

        > span {
            color: ${({ theme }) => theme.colors.base.title};
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }

        > button {
            background: transparent;
            border: none;
            color: ${({ theme }) => theme.colors.product.purple};
            font-family: Roboto;
            font-style: normal;
            font-weight: 400;
            line-height: 0;
            cursor: pointer;

            &:hover {
                color: ${({ theme }) => theme.colors.product.purpleDark};
                transition: color 0.2s;
            }
        }
    }

    .btnAddToCart {
        background: ${({ theme }) => theme.colors.product.purpleDark};
        border: none;
        border-radius: 6px;
        padding: 0.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.base.card};
        line-height: 0;

        &:hover {
            background-color: ${({ theme }) => theme.colors.product.purple};
            transition: background-color 0.1s;
        }
    }
`;