import styled from "styled-components";

export const SuccessContainer = styled.div`
    max-width: 70rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-block: 5rem;
`;

export const SuccessContent = styled.div`
  
    > h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
        font-weight: 800;
        line-height: 130%;
        color: ${({ theme }) => theme.colors.product.yellowDark};
    }

    > p {
        font-family: "Roboto", sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;
        color: ${({ theme }) => theme.colors.base.subtitle};
        margin-bottom: 2.5rem;
    }
`;

export const SuccessContentInfo = styled.div`
    border-radius: 6px 36px;
    background: 
    linear-gradient(#FAFAFA, #FAFAFA) padding-box,
    linear-gradient(to right, #DBAC2C, #8047F8) border-box;
    border: 1px solid transparent;
    padding: 2.5rem;
    width: 32rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    .adress-info, .delivery-info, .payment-info {
        display: flex;
        gap: 0.75rem;
        align-items: center;

        color: ${({ theme }) => theme.colors.base.text};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        line-height: 130%;

        > span {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            border-radius: 50%;
        }
    }

    .adress-info {
        span {
            background: ${({ theme }) => theme.colors.product.purple};
        }
    }

    .delivery-info {
        span {
            background: ${({ theme }) => theme.colors.product.yellow};
        }
    }

    .payment-info {
        span {
            background: ${({ theme }) => theme.colors.product.yellowDark};
        }
    }

    
`;