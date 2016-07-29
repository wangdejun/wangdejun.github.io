import React, { Component, PropTypes } from 'react';
import { render } from "react-dom";

class GithubCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>wangdejun</h1>
        );
    }
}

class GithubCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:props.products||[]
        }  
    }

    componentDidMount(){
        fetch('',{
        method:'POST',
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json'
        },
        body:"",
      }).then((response) => response.json())
        .then((responseJson) => {
            this.setState({products:responseJson.products})
        })
        .catch((error) => {
            console.error(error);
        });
    }  

    render() {
        return (
        	<div id = "github-card-list">
        		{
        			this.state.githublist.map.((githublist,i)=>{
        			return(
        				<GithubCard
        					className = "github-item"
        					key = {i}
        				/>)
        			})
        		}
        	</div>
        )
    }
}

export default GithubCardList;
