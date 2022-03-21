import React, { useState } from "react";
import Card from "./Card";

import {
  acsb,
  pcf,
  pubsub,
  tictactoe,
  todo,
  userapp,
  chatapp,
  rr,
  git,
  node,
  rbp,
  tra,
  booklib,
} from "../assets/images";

import { Container, Row } from "react-bootstrap";
export default function Carousel() {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Todo-List",
      subTitle: "It helps user to organise tasks",
      imgSrc: todo,
      link: "https://palakash27.github.io/Todo-List/",
      scLink: "https://github.com/Palakash27/Todo-List",
      selected: false,
    },
    {
      id: 1,
      title: "Tic-tac-toe",
      subTitle: "It is a 2 players game",
      imgSrc: tictactoe,
      link: "https://palakash27.github.io/tic-tac-toe/",
      scLink: "https://github.com/Palakash27/tic-tac-toe",
      selected: false,
    },
    {
      id: 2,
      title: "User-app",
      subTitle: "It displays users data",
      imgSrc: userapp,
      link: "https://palakash27.github.io/user-app/",
      scLink: "https://github.com/Palakash27/user-app",
      selected: false,
    },
    {
      id: 3,
      title: "Autocomplete search bar",
      subTitle: "Autocomplete search bar",
      imgSrc: acsb,
      link: "https://autocomplete-search-bar.herokuapp.com/",
      scLink: "https://github.com/Palakash27/autocomplete-search-bar",
      selected: false,
    },
    {
      id: 4,
      title: "Publisher Subscriber Model",
      subTitle: "Publisher Subscriber Model",
      imgSrc: pubsub,
      link: "",
      scLink: "https://github.com/Palakash27/pub-sub-model",
      selected: false,
    },
    {
      id: 5,
      title: "Book-library",
      subTitle: "Book-library",
      imgSrc: booklib,
      link: "https://palakash27.github.io/book-library/",
      scLink: "https://github.com/Palakash27/book-library",
      selected: false,
    },
    {
      id: 6,
      title: "PCF-Command-List",
      subTitle: "PowerApps Components Framework",
      imgSrc: pcf,
      link: "https://palakash27.github.io/PCF-Command-List/",
      scLink: "https://github.com/Palakash27/PCF-Command-List",
      selected: false,
    },
    {
      id: 8,
      title: "Nodejs-auth",
      subTitle: "Implemented authentication with passport.",
      imgSrc: node,
      link: "https://palakash27-nodejs-auth.herokuapp.com/users/login",
      scLink: "https://github.com/Palakash27/nodejs-auth",
      selected: false,
    },
    {
      id: 9,
      title: "GitHub Profile Readme",
      subTitle: "GitHub Profile Readme",
      imgSrc: git,
      link: "https://github.com/Palakash27",
      scLink: "https://github.com/Palakash27/palakash27",
      selected: false,
    },
    {
      id: 10,
      title: "React boiler plate",
      subTitle: "React boiler plate",
      imgSrc: rbp,
      link: "",
      scLink: "https://github.com/Palakash27/react-boiler-plate",
      selected: false,
    },
    {
      id: 11,
      title: "react-redux",
      subTitle: "react-redux",
      imgSrc: rr,
      link: "",
      scLink: "https://github.com/Palakash27/react-redux",
      selected: false,
    },
    {
      id: 12,
      title: "chat-app",
      subTitle: "This app was built with socket.io",
      imgSrc: chatapp,
      link: "https://bit.ly/palakash27-chat-app",
      scLink: "https://github.com/Palakash27/chat-app",
      selected: false,
    },
  ]);

  const handleCardClick = (id, card) => {
    console.log(id, items);

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    setItems([...items]);
  };

  const makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          key={item.id}
          item={item}
          click={(e) => handleCardClick(item.id, e)}
        />
      );
    });
  };

  return (
    <Container fluid={true}>
      <Row className="justify-content-around">{makeItems(items)}</Row>
    </Container>
  );
}
