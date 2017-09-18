import React, {PropTypes, Component} from 'react'
import * as _ from 'lodash';
import Article from './Article'

export default class UncheckedList extends Component {
  render() {
    const data = this.props.itemsUnchecked;
    const addCheckedArticle = this.props.addCheckedArticle;
    const items = [];

    const styleUncheckedList = {
      width: '45%',
      padding: '5px',
      float: 'left'
    }

    if (data) {
      const pageLinks = _.map(data, pageDescription => { 
        if (pageDescription != null) {
            return (<Article 
                    key={pageDescription.fullurl}
                    href={pageDescription.fullurl}
                    title={pageDescription.title} 
                    addCheckedArticle={addCheckedArticle} />); 
          }
          }); 
      items.push(pageLinks);
    }

    return (<div style={styleUncheckedList} className='uncheckedList'>
        <label>Search result</label>
        {items}
      </div>  
    );
  }
}

Article.propTypes = {
  addCheckedArticle: PropTypes.func.isRequired
}