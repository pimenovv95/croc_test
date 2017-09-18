import React, {PropTypes, Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as _ from 'lodash';
import UncheckedList from './UncheckedList'
import CheckedList from './CheckedList'

import * as actionsArticlesList from '../../actions/wikiSearch';

class ArticlesList extends Component {
  render() {
    const data = this.props.data
    let itemsUnchecked = [];
    const itemsChecked = this.props.checkedArticles;

    const addCheckedArticle = this.props.actionsArticlesList.addCheckedArticle;
    const delCheckedArticle = this.props.actionsArticlesList.delCheckedArticle;

    if (data) {
      if (itemsChecked.length != 0) {
        itemsUnchecked = _.map(data, article => {
          for (var key in itemsChecked) {
            if (itemsChecked[key].href == article.fullurl) {
              return null;
            }
          }
          return article;
        });
      } else {
        itemsUnchecked = [...data];
      }
    }
    
    return (<div className='articlesList'>
      <UncheckedList 
        itemsUnchecked ={itemsUnchecked}
        addCheckedArticle={addCheckedArticle} />
      <CheckedList 
        itemsChecked={itemsChecked}
        delCheckedArticle={delCheckedArticle} />
    </div>);
  }
}

ArticlesList.propTypes = {
  data: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  checkedArticles: state.articles.checkedArticles
});

const mapDispatchToProps = dispatch => ({
  actionsArticlesList: bindActionCreators(actionsArticlesList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)