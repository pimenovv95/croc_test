import React, {PropTypes, Component} from 'react'

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.onUncheckBtnClick = this.onUncheckBtnClick.bind(this);
    this.onCheckBtnClick = this.onCheckBtnClick.bind(this);
  }
  render() {
    const styleArticle = {
      border: '2px solid',
      padding: '5px',
      marginTop: '5px'
    }
    const styleButton = {
      background: 'white',
      display: 'inline-block',
      border: '2px solid',
      float: 'right',
      boxShadow: '2px 2px',
      margin: '-2px'
    }

    const href = this.props.href
    const title = this.props.title
    return (<div style={styleArticle} className='article' key={href}>
        <a
          href={href}>{title}
        </a>
        <button className='btn'
          style={styleButton} 
          onClick={this.props.addCheckedArticle != undefined ? this.onCheckBtnClick : this.onUncheckBtnClick}>
          {this.props.addCheckedArticle != undefined ? 'Check' : 'Uncheck'}
        </button>
      </div>);
  }
  onCheckBtnClick() {
    const href = this.props.href
    const title = this.props.title
    this.props.addCheckedArticle(href, title)
  }
  onUncheckBtnClick() {
    const href = this.props.href
    this.props.delCheckedArticle(href)
  }
}

Article.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}