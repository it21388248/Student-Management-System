import React,{Component} from 'react';
import axios from 'axios';


export default class CreatePost extends Component{

    constructor(props){
        super(props);
        this.state = {
            topic:"",
            description:"",
            postCategory:""
        }
    }

    handleInputChange = (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();

        const{topic,description,postCategory} = this.state;

        const data = {
            topic:topic,
            description:description,
            postCategory:postCategory

        }

        console.log(data);
        axios.post("http://localhost:8000/post/save",data).then((res)=>{

        if(res.data.success){
            this.setState(
                {
                    topic:"",
                    description:"",
                    postCategory:""
                }
            )
        }
        })
    }
  
  render(){

    return(
 
        <div>
            <h1>Create new Post</h1>
            <form>
                <div className='form-group'>
                    <label>Topic</label>
                    <input type = "text"  className="form-control"   placeholder="Enter Topic" name="topic"  id="topic" value = {this.state.topic}
                 onChange={this.handleInputChange}
                  />

                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <input type = "text"  class="form-control"   placeholder="Enter Description" name="description"  id="description" value = {this.state.description}
                 onChange={this.handleInputChange}
                  />


                </div>
                <div className='form-group'>
                    <label>Post Category</label>
                    <input type = "text"  class="form-control"   placeholder="Enter Post Category" name="postCategory"  id="postCategory" value = {this.state.postCategory}
                 onChange={this.handleInputChange}
                  />

                </div>
                <button className='btn btn-success' type="submit" onClick = {this.onSubmit}>Submit</button>
            </form>
        </div>
            
        )
    
  }

}

///////////////////
