import React,{Component} from "react";
import styles from '../layout/layout.module.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

class Layout extends Component{
    state={
        showNav:false
    }

    toggleSideNav = (action) => {
        this.setState({
            showNav:action
        })
    }


    render(){
        return(
            <div className={styles.body}>
                <Header 
                    user = {this.props.user}
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSideNav(false)}
                    onOpenNav={() => this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout