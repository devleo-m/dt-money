import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr); // quantos elementos vao esta no grid no caso 3
    gap: 2rem; // espaçamento entre cada um do grid
    margin-top: -7.5rem; // joga os elementos grid pra cima

    div{ 

        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{

            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
         
        }

        &.green-total{
                background: var(--green);
                color: #fff;
            }
    }

`