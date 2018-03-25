/**
 * Created by jin on 19/03/2018.
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
  Text,
  Icon,
  Left,
  Spinner,
  List,
  ListItem,
  Right,
  Title,
  Thumbnail
} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Footer from "../Footer";
import StarRating from 'react-native-star-rating';
import network from '../../network';
import moment from 'moment';

class DishPage extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      loading: true,
      dishId: this.props.match.params.id
    };
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClickBack() {
    this.props.history.goBack();
  }
  componentDidMount(){
    //let dishId = "2c9ad7fa6255a250016255a26cf50000";
    console.log(this.props.match.params.id);
    network.dish.getPostsOfDish(this.state.dishId)
        .then(res=>res.json())
    .then(res => {
      console.log("dish page!!!");
      console.log(res);
      this.props.dispatch({type:"GET_POSTS_OF_DISH", data: res});
      this.setState({loading: false});
    })
    .catch(err => {
      console.log(err)
    })
  }
  // onDishPhotoPress(imageUrl) {
  //   this.props.history.push(`/dishphoto/${imageUrl}`);
  // }

  render() {
      let photos = this.props.postsOfDish.map(item => {
        let image = item.imageUrl;
        if(!image)
          image = "http://via.placeholder.com/100x100";
        let poster = item.creator;
        if(!poster)
          poster = "Xiaoxin";
        // let avatar = item.creatorAvatar;
        // if(!avatar)
        //   avatar = "http://via.placeholder.com/100x100";
        let avatar = "http://via.placeholder.com/100x100";
        console.log("avatar = " + avatar);
        return (
            <Card key={item.dishId}>
              <CardItem>
                <Image source={{uri: image}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>{item.upvoteCount} Likes</Text>
                  </Button>
                </Left>
                <Right>
                  <CardItem>
                  <Thumbnail small source={{uri: avatar}} style={styles.poster} />
                  <Text style={{fontSize:16}}>{poster}</Text>
                  </CardItem>
                </Right>
              </CardItem>
            </Card>
          )
    }
    );
    //console.log(this.props);
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.handleClickBack}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
          <Title>Dish</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          {this.state.loading && <Spinner/>}
          <Text style={styles.dishName}>{this.props.postsOfDish[0].dishName}</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={4.5}
            containerStyle={{marginTop: 3, alignSelf: "center"}}
            fullStarColor={"#f5af4b"}
            emptyStarColor={"#f5af4b"}
            halfStarEnabled
            starSize={15}
          />
          <Text style={styles.restaurant}>{this.props.postsOfDish[0].restaurantName}</Text>
          <List>
            {photos}
          </List>
        </Content>
        <Footer/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  dishName: {
    paddingTop: 10,
    textAlign: 'center',
  },
  restaurant: {
    paddingTop: 10,
    fontSize: 17,
    textAlign: 'center',
  },
  poster: {
    marginRight: 10,
  }
});


const mapStateToProps = (state, ownProps) => {
  return {
    dish: state.dish,
    postsOfDish: state.postsOfDish
  }
};

export default connect(
  mapStateToProps
)(DishPage);