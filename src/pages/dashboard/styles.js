import styled from '@emotion/styled'

const background = "#f5f6fa";
const header = "#353b48";
const sideMenu = "#dcdde1";
const buttonHover = "#718093";


export const Header = styled.header`
    height: 60px;
    width: 100%;
    background-color: ${header};
    display: flex;
    justify-content: center;
    position: relative;
    h3 {
        align-self: center;
        color: ${background};
    }
`;


export const Main = styled.main`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;

    aside{
        flex: 1;
        height: 100%;
        background-color: ${sideMenu};
        h3 {
            text-align: center;
            margin-bottom: 0;
            margin-top: 10px;
        }

        .buttonContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            Button {
                height: 35px;
                color: ${background};
                width: 90%;
                background-color: ${header};
                margin-top: 15px;
            }
            Button:hover{
                background-color: ${buttonHover};
            }
        }
    }
    .tableContainer {
        flex: 4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;




/*
.wrapper {
    width: 100%;
    header {
        height: 60px;
        width: 100%;
        background-color: $header;
        display: flex;
        justify-content: center;
        position: relative;
        h3 {
            align-self: center;
            color: $background;
        }
    }

    main {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 60px;
        bottom: 0;
        width: 100%;

        aside {
            flex: 1;
            height: 100%;
            background-color: $sideMenu;
            h3 {
                text-align: center;
                margin-bottom: 0;
                margin-top: 10px;
            }

            .buttonContainer {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: center;
                Button {
                    height: 35px;
                    color: $background;
                    width: 90%;
                    background-color: $header;
                    margin-top: 15px;
                }
                Button:hover{
                    background-color: $buttonHover;
                }
            }
        }

        .tableContainer {
            flex: 4;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
*/