import React,{Component} from 'react';
import axios from 'axios';



export default class PostDetails extends Component{

    //constructor
    constructor(props){
        super(props);

        //state
        this.state = {
            post:{}
        }
    }
  //retrive data into specific data
    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/post/${id}`).then((res)=>{

        if(res.data.success){
            this.setState({
                post:res.data.post
            })

            console.log(this.state.post);
        }
        })
    }
  render(){

    const {topic,description,postCategory} = this.state.post;

    return(

       
     <div style = {{marginTop:'20px'}}>
         <br></br>
        <h4>{topic}</h4>
        <hr/>

        <dl className='row'>

            <dt className='col-sm-3'>Description</dt>
            <dd className='col-sm-9'>{description}</dd>

            <dt className='col-sm-3'>Post Category</dt>
            <dd className='col-sm-9'>{postCategory}</dd>

        </dl>
      
     </div>
    )
    
  }

}
