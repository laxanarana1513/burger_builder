import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../Auxi';

const withErrorHandler = (WrappedComponent, axios) =>{
    return class extends React.Component{

        state = {
            error: null
        }

        componentDidMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error =>{
                this.setState({error: error})
            })
        }

        componentWillUnmount(){
            // console.log('Will Unmount', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = ()=>{
            this.setState({error: null})
        }

        render() {
            return(
                <Auxi>
                    <Modal show={this.state.error} 
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxi>
                
            )
        }
    }
}

export default withErrorHandler