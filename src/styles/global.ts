import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{

        --red:  #E62E4D;
        --blue: #5429CC;
        --green: #33cc95;

        --blue-light: #6933FF;
        
        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #f0f2f5;
        --shape: #FFFFFF;        
    }

    // Por padrão o site tem 16px
    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    // REM -> 1rem = 16px

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{

        background: rgba(0,0,0,0.5);

        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;


    }
    .react-modal-content{
        position: relative;
    
        width: 100%;    
        max-width: 576px;
    
        padding: 3rem;
    
        border-radius: 0.25rem;
    
        background: var(--background);
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        border: 0;
    
        background: transparent;
    
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`