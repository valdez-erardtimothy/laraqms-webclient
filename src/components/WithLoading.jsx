import React from 'react';
import Loading from './placeholders/Loading';

/**
 * Pseudo-HoC for components with Loading state
 * 
 * (not a true React HoC)
 * 
 * @param {React.Component} WrappedComponent 
 * the base component
 * @param {boolean} isLoading 
 * determines whether loading placeholder should be rendered
 * @param {React.Component} PlaceholderComponent 
 * the placeholder React component to be used
 * @param {boolean} preRender 
 * allow rendering base component even while Loading 
 * (component will be hidden below placeholder)
 * @param  {...any} props 
 * props for the WrappedComponent
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