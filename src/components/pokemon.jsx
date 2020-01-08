import React, { Component } from 'react'
import Pagination from '../components/common/pagination'
import axios from 'axios'
import { paginate } from '../utils/paginate'
import { Link } from 'react-router-dom'


class Pokemon extends Component {
    state = {
        pokemonList: [],
        pageSize: 5,
        currentPage: 1,
        term: ''
    }
    componentDidMount() {
        this.getUsers()
    }
    getUsers = async () => {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        this.setState({ pokemonList: response.data.results });
    }
    handlePageChange = page => {
        console.log(page)
        this.setState({ currentPage: page })
    }
    searchHandler = (event) => {
        this.setState({ term: event.target.value })
    }
    render() {
        const { pageSize, currentPage, pokemonList: allpokemonList, term } = this.state
        const pokemonList = paginate(allpokemonList, currentPage, pageSize)

        return (
            <>
                <nav className="navbar p-3 navbar-light bg-light border mt-5">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        onChange={this.searchHandler}
                    />
                </nav>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr><th>Name</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemonList.filter(searchingFor(term)).map(p => (
                            <tr key={p.name}>
                                <td>{p.name}</td>
                                <td><Link to={`/${p.name}`}>{p.url}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={this.state.pokemonList.length}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                />
            </>
        )
    }
}
export default Pokemon

function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term
    }
}
