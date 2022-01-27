import React from 'react';
import Loading from './placeholders/Loading';

/**
 * Pseudo-HoC for components with Loading state
 * 
 * (not a true React HoC)
 * 
 * @param {any} props
 * @param {boolean} props.isLoading 
 * determines whether loading placeholder should be rendered
 * @param {React.Component} props.PlaceholderComponent 
 * the placeholder React component to be used
 * @param {boolean} props.preRender 
 * allow rendering base component even while Loading 
 * (component will be hidden below placeholder)
 * @param {*} props.children
 * @returns 
 */
export default function WithLoading({
    isLoading, 
    PlaceholderComponent = Loading,
    preRender = true,
    children
}) {
    const shouldRenderComponent = ()=> !isLoading || preRender;

    return <>
        {isLoading && (
            <div style={{zIndex:1}}>
                {<PlaceholderComponent/>}
            </div>
        )}
        {shouldRenderComponent() && children} 

    </>;
     

}