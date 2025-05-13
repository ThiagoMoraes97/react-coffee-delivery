import styled from "styled-components";

export const HomeContainer = styled.main`
    max-width: 70rem;
    margin: 0 auto;
`;

export const BannerContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5.875rem 0 6.75rem;
`;

export const BannerInfo = styled.div`
    width: 36.75rem;

    h1 {
        color: ${({ theme }) => theme.colors.base.title};
        font-family: "Baloo 2", sans-serif;
        font-size: 3rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; 

        margin-bottom: 1rem;
    }

    p{
        color: ${({ theme }) => theme.colors.base.subtitle};
        font-family: "Roboto", sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; 
    }
`;


export const BannerItens = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-top: 4.125rem;

    > .banner-item-left, .banner-item-right {
        display: flex;
        align-items: start;
        gap: 1.25rem;
        flex-direction: column;

        > .banner-item-info{
            display: flex;
            align-items: center;
            gap: 0.75rem;

            span{
                display: flex;
                align-items: center;
                justify-content: center;

                color: var(--White, #FFF);
                padding: 0.5rem;
                border-radius: 50%;
            }

            p{
                color: var(--Base-Text, #574F4D);
                font-family: "Roboto", sans-serif;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%;
            }
        }

    }

    .banner-item-left{
        .banner-item-info:nth-child(1){
            span{
                background-color:${({ theme }) => theme.colors.product.yellowDark};
            }
        }

        .banner-item-info:nth-child(2){
            span{
                background-color:${({ theme }) => theme.colors.product.yellow};
            }
        }
    }

    .banner-item-right{
        .banner-item-info:nth-child(1){
            span{
                background-color:${({ theme }) => theme.colors.base.text};
            }
        }
        .banner-item-info:nth-child(2){
            span{
                background-color:${({ theme }) => theme.colors.product.purple};
            }
        }
    }

`;

export const CoffeeInfo = styled.div`
    padding: 2rem 0 5rem;

    h2 {
        color: var(--Base-Subtitle, #403937);
        font-family: "Baloo 2", sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;

        margin-bottom: 3rem;
    }
`;

export const CoffeeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 2.5rem;
    column-gap: 2rem;
`;