import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {connect} from 'react-redux';
import * as _ from 'lodash';

import {ConnectedSearchForm} from '../../components/SearchForm/SearchForm';
import {searchWiki} from '../../actions/wikiSearch';
import ArticlesList from '../../components/SearchForm/ArticlesList'

export class CustomWikiSearch extends React.Component {
    static propTypes = {
        searchResults: PropTypes.arrayOf(PropTypes.object),
        fetchData: PropTypes.func
    };

    constructor(...args) {
        super(...args);

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    componentWillMount() {

    }

    render() {
        const items = [];

        items.push(<ConnectedSearchForm key="searchForm" form="wikiSearch" onSubmit={this.handleSearchSubmit}/>);

        if (this.props.searchResults) {
            items.push(<ArticlesList key="articlesList" data={this.props.searchResults} />);
        }

        return <div>{items}</div>;
    }

    handleSearchSubmit(values) {
        if (values.search) {
            this.props.fetchData(values.search);
        }
    }
}

const mapStateToProps = state => ({
    searchResults: state.wikiSearch && state.wikiSearch.data
});

const mapDispatchToProps = dispatch => ({
    fetchData(text) {
        dispatch(searchWiki(text));
    }
});

export const ConnectedWikiSearch = connect(mapStateToProps, mapDispatchToProps)(CustomWikiSearch);