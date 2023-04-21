import React, { Component } from 'react'

export default class Button extends Component {

    render() {
        let {item, handleChangeGlasses} = this.props;

        return (
            <div>
                <button onClick={() => {
                    handleChangeGlasses(item)
                }}>
                    <img src={item.url} alt="..." />
                </button>
            </div>
        )
    }
}
