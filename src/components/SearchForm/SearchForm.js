import * as React from 'react';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {Field, reduxForm, propTypes} from 'redux-form'

export class SearchForm extends React.Component {
    static propTypes = {
        ...propTypes,
        pristine: PropTypes.bool,
        submitting: PropTypes.bool,
        form: PropTypes.string
    };

    static ENTER_KEY_CODE = 13;

    constructor(...args) {
        super(...args);

        this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    }

    render() {

        const styleSearchForm = {
            padding: '5px'
        } 
        const styleInput = {
          border: '2px solid',
          margin: '0 5px 0 15px'
        }
        const styleButton = {
          background: 'white',
          display: 'inline-block',
          border: '2px solid',
          boxShadow: '2px 2px',
          margin: '-2px'
        }

        return <div style={styleSearchForm}>
            <label>Wiki search</label>
            <Field name="search" 
                component="input" 
                type="text" 
                placeholder="Type text..."
                style={styleInput}  
                onKeyUp={this.handleOnKeyUp}/>
            <button onClick={this.props.handleSubmit} 
                disabled={this.props.pristine || this.props.submitting} 
                style={styleButton}>
                Search
            </button>
        </div>
    }

    handleOnKeyUp(proxy) {
        if (proxy.keyCode == SearchForm.ENTER_KEY_CODE) {
            this.props.handleSubmit();
        }
    }
}

export const ConnectedSearchForm = reduxForm()(SearchForm);