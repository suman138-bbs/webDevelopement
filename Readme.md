# Fundamentals of Web

**Internet are just a connected computer that share file to each other**

`tracert google.com` which is used to find number of hopes that are connected from our router to google server

**The one way to make website load faster**

- Location of the server
- How many trips
- Size of files

## Browser

**The piece of Software that receive file .File means HTML,CSS,JAVASCRIPT File**

## WWW : It is a protocal that required by the web to communicate to each other

# <!DOCTYPE html>

**The HTML document type declaration, also known as DOCTYPE, is the first line of code required in every HTML or XHTML document. The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.**

# Meta tag

**It helps to add information about html**

# head tag

**This tag is use for writing information about webpage**

# anchor tag

**Anchor tag has power to link other document for example server sent us html file in that html file we can link other document**

# why index.html

**Because it is first html page and bydefault most server return the index.html file**

# Html Semantic

**A sementic clearly define the meaning for developer and the browser as it gives feature like optmization**

**HTML5 performace of web**

# CSS: Cascading Style Sheet

It cascade over the element

```like
h1{
    color:red;
}
p{
    color:blue;
}
p{
    color:pink;
}
```

now in paragraph pink color apply

# Css Selector

.class
#id

- element
  element,element
  element element :'Parent child selector'
  element > element : 'Direct child'
  element1 + element2 : 'Next to the element1 means it select the element2' and 'imediate neghibour of element1s'

# Box Model

```
.boxmodel{
    border:5px solid rebeccapurple ;
    display: inline-block;
    padding:5px 20px 5px 20px; //inner
    margin: 0px 10px 0px 10px;  //in-between
    width:20px;            //content
    height:30px;           //content

}
```

# Critical Render Path

# DOM

**Whenever we request html and after geting html browser create something special it create a DOM. it allows us to change html and CSS**

**Window has a properties document that specify what you get to dispaly**

# JavaScript Behaviour

**JavaScript is Single Threaded langauage that can be non blocking it has single call stack and it does one thing at a time it order to not-block single threaded it can be Asynchonouus with call back function and call back function gets runs at the background through the callBack Queue and event loop to bring it back to the call Stack**

**JavaScript is single threaded(one thing at a) language because it has a one call stack**

# Web API

**web api like fetch,setTimeout,setInterval provided us by the browser inoreder to optimized the performance because it is asynchornus in nature**

```
window onject this is not provided by a  javascript it provide by the browser
```

**Whenever JavaScript run threre two phase creation phase and execution phase in execution phase memory block are created and also hoisting happen**

**NOTE: Each Execution context have own Environment**

**In execution context two phase gets happen CREATION PHASE and EXECUTION PHASE**

**Hoisting means it allocate memory at during the Creation Phase**

**Using var keyword memory created during the creation phase at it unsigned to undefine**

## Function Expression Vs Function Declaration

**The Diff betn these two are function expression are not Hoisted and function Declaration are Hoisted**

## Block Scope and Function Scope

**Declare variable using var keyword it means function scope but using let and const keyword they have block scope**

```
var one = 1; //first
var one = 2; //Second

// during the creation time second var will ignore because we already assign one = undefine but when execution time it assign 2
```

# call bind apply

**whenever we create a function a funvtion that have a property called call and also if we want use methods of one obeject to another object we can use call as well as we can pass parameter but in apply pass parameter in the form of array and using bind we have to call later on**

# NULL and undefined

**Undefine:means absence of defination and NULL is an absence of value**

# true.toString()

**true is premtive datatype but why toString() for premtive because javaScript created a wrapper Bolean(true).toString() that's why we can acess the toString method**

#Function:
**Function are object in javaScript the it has some properties(name) and method(call(),bind(),apply())**

### function are first class citizen in JS:

**Because we can assign function to the Variable and we can pass function as an Arguments and also function can return the another function so it's called as first class citizen in JS**

# Closure

**JavaScript engine keeps the variable if some variable reference it then it keeps inside a closure or it's child function**

# React

## Virtual Dom

**virtual Dom is just s Java Script Object this represent just current state of Website and we give this object to the react and react do some operation and refelect to the page in most optimum way**
