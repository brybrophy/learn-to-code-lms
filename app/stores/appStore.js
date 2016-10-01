import { action, observable } from 'mobx';
import cookie from 'react-cookie';

class AppStore {
    @observable avatarUrl;
    @observable events;
    @observable loggedIn;
    @observable pages;
    @observable replitAccess;
    @observable slideIndex;
    @observable snackbar;
    @observable snippets;
    @observable theme;
    @observable timeout;

    constructor() {
      this.avatarUrl = '';
      this.events = [];
      this.loggedIn = cookie.load('loggedIn');
      this.pages = {
        home: 0,
        html: 1,
        css: 2,
        javascript: 3,
        git: 4,
        about: 5
      };
      this.slideIndex = null;
      this.snackbar = false;
      this.snippets = {
        helloWorld: {
          snippet: '\'use strict\';\n\nfunction helloWorld() {\n  return \'Hello world\';\n}\n\nhelloWorld();',
          snippetType: 'javascript',
          lessonName: 'javascript'
        },
        functionJs: {
          snippet: '// Functions are a way of telling JavaScript to perform one or many actions.\n// Write a simple function that divides a number by 2.\n\n// example: function divideByTwo() {\n// return [Your Code Here]\n\n// divideByTwo()}',
          snippetType: 'comment',
          lessonName: 'javascript'
        },
        functionJsTwo: {
          snippet: '// Functions are a way of telling JavaScript to perform one or many actions.\n// Write a simple function that divides a number by 2.\n\n// example: function divideByTwo() {\n// return [Your Code Here]\n\n// divideByTwo()}',
          snippetType: 'comment',
          lessonName: 'javascript'
        },
        numberJs: {
          snippet: '// Numbers in javascript work just like numbers in\n\// the real world. Try doing some basic math below.\n\n// example: 1 + 1',
          snippetType: 'comment',
          lessonName: 'javascript'
        },
        stringsJs: {
          snippet: '// In JavaScript, code written inside of quotes is called a string.\n// Type your name in quotes, then type a semi-colon.\n//\n// example: \'Bill Murray\';',
          snippetType: 'comment',
          lessonName: 'javascript'
        },
        varJs: {
          snippet: '// Variables are places where you can store pieces of code.\n// You declare a variable using the keyword, var.\n// Try storing a string in a variable.\n\n// example: var greeting = \'Hello World\';\n\n// greeting;',
          snippetType: 'comment',
          lessonName: 'javascript'
        }
      };
      this.theme = 'tomorrow_night_eighties';
      this.timeout = null;
    }

    @action getEvents(events) {
      this.events = events;
    }

    @action trackSlideIndex(value) {
      this.slideIndex = value;
    }

}

const appStore = new AppStore();

export default appStore;
export { AppStore };
