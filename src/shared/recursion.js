import React from "react";
import { Link } from "react-router-dom";
import allCategories from "../../shared/categories";

const recursiveTraverse = list => {
  for (let i = 0; i < list.length; i++) {
    list[i].slug = encodeURI(list[i].name.toLowerCase());
    if (list[i].children.length > 0) {
      for (let j = 0; j < list[i].children.length; j++) {
        console.log(`--1${list[i].children[j].name}`);
        list[i].children[j].slug = encodeURI(
          list[i].children[j].name.toLowerCase()
        );
        if (list[i].children[j].children.length > 0) {
          for (let k = 0; k < list[i].children[j].children.length; k++) {
            console.log(`----2${list[i].children[j].children[k].name}`);
            list[i].children[j].children[k].slug = encodeURI(
              list[i].children[j].children[k].name.toLowerCase()
            );
            if (list[i].children[j].children[k].children.length > 0) {
              for (
                let l = 0;
                l < list[i].children[j].children[k].children.length;
                l++
              ) {
                console.log(
                  `--------3${list[i].children[j].children[k].children[l].name}`
                );
                list[i].children[j].children[k].children[l].slug = encodeURI(
                  list[i].children[j].children[k].children[l].name.toLowerCase()
                );
              }
            }
          }
        }
      }
    }
  }
  return list;
};

console.log(recursiveTraverse(allCategories));
const Home = props => {
  return <span>2</span>;
};

export default Home;
