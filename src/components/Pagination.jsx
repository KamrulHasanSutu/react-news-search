import React, { Component } from 'react'

export default class Pagination extends Component {
    state = {
        isEditable: false,
    }
    doubleClick = () => {
        this.setState({
            isEditable: !this.state.isEditable,
        });
    }
    render() {
        return (
            <div className="d-flex my-5 align-items-center">
                <button className='btn btn-warning'>Previous</button>
                <div className="flex-grow-1 text-center">
                    {this.state.isEditable ? (
                        <input type="number" value="1" />
                    ) : (
                        <p
                            style={{ userSelect: 'none', lineHeight: '1.1' }}
                            title='Double tap to jump page'
                            onDoubleClick={this.doubleClick}
                        >
                            {1} of {100}<br />
                            <small>Double Click to Edit</small>
                        </p>
                    )}
                </div>
                <button className='btn btn-warning' style={{ marginLeft: 'auto' }}>Next</button>
            </div>
        )
    }
}
