/**
 * Created by Xiaoxin on 24/03/2018.
 */

import React, {Component} from 'react';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title
} from 'native-base';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import Footer from "./Footer"

class DishPhoto extends Component {
  constructor(props, context) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
          <Title>{this.props.restaurant.name}</Title>
          </Body>
        </Header>
        <Content>
          <CardItem cardBody>
            <Image source={{uri: this.props.restaurant.avatar}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem cardBody>
            <TouchableWithoutFeedback onPress={this.handleClickImage}>
              <Body style={{paddingTop: 5, paddingBottom: 20, paddingLeft: 20, paddingRight: 20}}>
              <Text note><Icon name="md-heart" style={{fontSize: 15}}/> Liked dish <Text
                style={{marginLeft: 5}}>{this.props.restaurant.name}</Text></Text>
              </Body>
            </TouchableWithoutFeedback>
          </CardItem>
        </Content>
        <Footer/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});


const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurant
  }
};

export default connect(
  mapStateToProps
)(DishPhoto);