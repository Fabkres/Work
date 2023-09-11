import React from "react"
import { Children, cloneElement } from "react";
import { styled } from "styled-components";

interface Props {
    children: React.ReactNode
}

export const Stack = ({ children }: Props) => {
    const arrayChildren = Children.toArray(children);

    return (
        <>
            {Children.map(arrayChildren, (child: any, index) => {
                return cloneElement(child, {
                    style: {
                        ...(child.props.style),
                        'zIndex': index * 100,
                        'position': 'absolute'
                    },
                    onlick: () => console.log(index)
                })
            })}
        </>);
};


export const VectorLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    /* position: relative; */
    img {
        position: absolute;
    }
`;

export const VectorTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    img {
        position: absolute;
    }
`;

export const VectorRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    img {
        position: absolute;
    }
`;