import React, {PropTypes, Component} from 'react'
import * as _ from 'lodash';
import Article from './Article'

export default class CheckedList extends Component {
  render() {
    const data = this.props.itemsChecked;
    const delCheckedArticle = this.props.delCheckedArticle;
    const items = [];

    const styleCheckedList = {
      width: '45%',
      padding: '5px',
      float: 'right'
    }

    if (data) {
      const pageLinks = _.map(data, pageDescription => { 
        if (pageDescription != null) {
            return (<Article 
                    key={pageDescription.href}
                    href={pageDescription.href}
                    title={pageDescription.title} 
                    delCheckedArticle={delCheckedArticle} />); 
          }
          }); 
      items.push(pageLinks);
    }

    return (<div style={styleCheckedList} className='uncheckedList'>
        <label>Checked</label>
        {items}
      </div>  
    );
  }
}

Article.propTypes = {
  delCheckedArticle: PropTypes.func.isRequired
}