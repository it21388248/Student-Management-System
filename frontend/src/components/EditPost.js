import React,{Component} from 'react';
import axios from 'axios';


export default class EditPost extends Component{
    
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
        /////////////
        const id = this.props.match.params.id;
        /////////////////

        const{topic,description,postCategory} = this.state;

        const data = {
            topic:topic,
            description:description,
            postCategory:postCategory

        }

        console.log(data);
        axios.put(`http://localhost:8000/post/update/${id}`,data).then((res)=>{

        if(res.data.success){
            alert("Post Updated Successfully")
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

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/post/${id}`).then((res)=>{

        if(res.data.success){
            this.setState({
                ///////
                topic: res.data.post.topic,
                description: res.data.post.description,
                postCategory: res.data.post. postCategory

            })

            console.log(this.state.post);
        }
        })
    }
  
  render(){

  
    return(
 
        <div>
            <h1>Edit Post</h1>
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
                <button className='btn btn-success' type="submit" onClick = {this.onSubmit}>Update</button>
            </form>
        </div>
            
        )
    
    
  }

}
