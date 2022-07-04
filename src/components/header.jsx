import React, { Component } from 'react'
import {newsCatagory} from '../news'

export default class Header extends Component {

    state = { searchterm: '' }
    handleSearch = e => {
        this.setState({
            searchterm: e.target.value
        })
    }
    handleKeyPress = e => {

    }
    render() {
        const {category} = this.props;
        return (
            <div className='my-4'>
                <h1 className="mb-4" style={{ fontWeight: '300' }}>
                    Block Buster Hadlines
                </h1>
{/* seaching bar */}
                <input
                    type="search"
                    value={this.state.searchterm}
                    onChange={this.handleSearch}
                    onKeyPress={this.handleKeyPress}
                    className="form-control"
                    placeholder='type anything'
                />
{/* all category displaying, as buttons,  comming from news files */}
                <div className="my-4">
                    {newsCatagory && 
                        Object.keys(newsCatagory).map((item) => {
                            if(category === newsCatagory[item]){
                                return(
                                    <button className='btn btn-sm btn-warning mr-2 mb-2'>
                                        {`#${newsCatagory[item]}`}
                                    </button>
                                );
                            }
                            return(
                                <button className='btn btn-sm btn-ligh mr-2 mb-2'>
                                    {`#${newsCatagory[item]}`}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
