import React,{Component} from 'react';
import axios from 'axios';



export default class Home extends Component{
  

  

  //create constructor
  constructor(props){

    super(props);

    this.state={
      //get posts in to an array
      posts:[]
    }
  }

  //call to the method using the method "componentDidMount"
  componentDidMount(){
    this.retrievePosts();
  }

  //write the method to get request

  retrievePosts(){
    axios.get("http://localhost:8000/posts").then(res=>{

    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      })

      console.log(this.state.posts)
    }

    })
  }

  //onDelete

  onDelete = (id)=>{
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res)=>{
        alert("Deleted Successfully");
        this.retrievePosts();
    })
  }

  //filter data

  filterData(posts,searchKey){

    const result = posts.filter((posts)=>
    posts.topic.toLowerCase().includes(searchKey)||
    posts.description.toLowerCase().includes(searchKey)||
    posts.postCategory.toLowerCase().includes(searchKey)
    
    )
   

    this.setState({posts:result})
  }

  handleSearchArea = (e)=>{

    const searchKey = e.currentTarget.value;
    
    axios.get("http://localhost:8000/posts").then(res=>{

    if(res.data.success){
     
      this.filterData(res.data.existingPosts,searchKey)
    }

    })

  }

  render(){

    return(
      
        //show data in frontend
        <div className = " container">
            <br></br>,<br></br>
            <h1>All Posts</h1>
            <br></br><br></br><br></br>

            <div className='col-lg-3 mt-2 mb-2'>
              <input className='form-control' type ='search' placeholder="Search" name='search' onChange={this.handleSearchArea}/>
            </div>

           <table class = "table">
            
            <thead>
                <tr>
                    <th scope = "col">#</th>
                    <th scope = "col">Topic</th>
                    <th scope = "col">Description</th>
                    <th scope = "col">Post Category</th>
                    <th scope = "col">Action</th>
                    
                </tr>
            </thead>

            <tbody>
            {this.state.posts.map((posts,index)=>(
                
                <tr>
                    <th scope = "row">{index+1}</th>
                    
                    <td>
                        <a href = {`/post/${posts._id}`} style = {{textDecoration:'none'}}>{posts.topic}</a>
                     </td>
                    <td>{posts.description}</td>
                    <td>{posts.postCategory}</td>

                    <td> 
                    <a className = "btn btn-warning" href={`/edit/${posts._id}`}> 
                         <i className = "fas fa-edit"></i>&nbsp;Edit
                        </a>
              

                        &nbsp;

                        <a className = "btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}> 
                         <i className = " fas fa-trash-alt"></i>&nbsp;Delete
                        </a>

                    </td>

                </tr>
            ))}
            </tbody>
           </table>

           <button className = "btn btn-success"><a href="/add" style = {{textDecoration:'none',color:'white'}}>Create New Post</a></button>
        
        </div>
    )
    
  }
}