import React, { Component } from 'react'
import { newsCatagory } from '../news'

export default class Header extends Component {

    state = { searchTerm: '' }
    handleSearch = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    handleKeyPress = e => {
        if(e.key ==='Enter'){
            this.props.search(this.state.searchTerm)
        }
    }
    render() {
        const { category, changeCategory } = this.props;
        return (
            <div className='my-4'>
                <h1 className="mb-4" style={{ fontWeight: '300' }}>
                    Newspaper Haeading
                </h1>
                {/* seaching bar */}
                <input
                    type="search"
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                    onKeyPress={this.handleKeyPress}
                    className="form-control"
                    placeholder='type anything'
                />
                {/* all category displaying, as buttons,  comming from news files */}
                <div className="my-4">
                    {newsCatagory &&
                        Object.keys(newsCatagory).map((item) => {
                            if (category === newsCatagory[item]) {
                                return (
                                    <button className='btn btn-sm btn-warning mr-2 mb-2'
                                        onClick={() => changeCategory(newsCatagory[item])}
                                    >
                                        {`#${newsCatagory[item]}`}
                                    </button>
                                );
                            }
                            return (
                                <button onClick={() => changeCategory(newsCatagory[item])} className='btn btn-sm btn-ligh mr-2 mb-2'>
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
