import { styled } from "styled-components";
import styles from "../../Style";

export const ButtonStyle = styled.button<{ $primary?: boolean; }>`
    border: none;
    cursor: pointer;
    margin-right: 8px;
    background-color: ${styles.colors.green};
    padding: 10px;
    border-radius: 16px;
    font-family: ${styles.typography.types.daleRegular};
    color: white;
    background-color: ${props => props.$primary ? styles.colors.green : styles.colors.gray};
`;