import React from 'react'

export default (props) => {
    return (
        <div>
            <label htmlFor='passo'>Passo: </label>
            <input id="passo" type='number' value={props.passo}
            onChange={e => props.passoChange(+e.target.value)}/>
        </div>
    )
}