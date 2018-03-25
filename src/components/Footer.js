/**
 * Created by kai on 05/03/2018.
 */
import React, {Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-native';

class OurFooter extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  handleChangeTab(tab, url) {
    this.props.dispatch({type: "CHANGE_TAB", data: tab});
    this.props.history.push(url);
  }

  render() {
    let tabs = this.props.tabs.map((item) => {
      return (
        <Button key={item.id} active={this.props.currentTab == item.id}
                onPress={this.handleChangeTab.bind(this, item.id, item.url)}>
          <Icon name={item.icon}/>
        </Button>
      );
    });
    return (
      <Footer>
        <FooterTab style={styles.footerTab}>
          {tabs}
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footerTab: {
    backgroundColor: "white"
  },
  link: {}
});


const mapStateToProps = (state, ownProps) => {
  return {
    tabs: state.tabs,
    currentTab: state.currentTab
  }
};

export default withRouter(connect(
  mapStateToProps
)(OurFooter));