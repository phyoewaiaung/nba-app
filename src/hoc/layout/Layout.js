import React,{Component} from "react";
import Header from '../../header/Header';
import Footer from "../../components/footer/Footer";
import style from './layout.module.css';

class Layout extends Component {
    state = {
        showNav : false
    }

    toggleSideNav = (action) => {
        this.setState({
            showNav:action
        })
    }

    render() { 
        return(
            <div>
                <Header 
                showNav = {this.state.showNav}
                onHideNav = {()=> this.toggleSideNav(false)}
                onOpenNav = {()=> this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;