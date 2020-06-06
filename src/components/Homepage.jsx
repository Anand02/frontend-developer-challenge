import React from 'react';
import ReactPlayer from 'react-player';
import { Container,Row,Col,Card,Carousel,ListGroup } from 'react-bootstrap';
import '../index.css';
import Spinner from './Spinner';
const myObj = {
    "url": [
      { "id":1, "link":"https://youtu.be/QFaFIcGhPoM", "title":"Introduction"},
      { "id":2, "link":"https://youtu.be/9hb_0TZ_MVI","title":"Hello World"},
      { "id":3, "link":"https://youtu.be/9VIiLJL0H4Y","title":"Folder Structure"},
      { "id":4, "link":"https://youtu.be/Y2hgEGPzTZY","title":"Components"},
      { "id":5, "link":"https://youtu.be/Cla1WwguArA","title":"Function Components"},
      { "id":6, "link":"https://youtu.be/lnV34uLEzis","title":"Class Components"},
      { "id":7, "link":"https://youtu.be/oecI26cWqzk","title":"Hooks Update"},
      { "id":8, "link":"https://youtu.be/7fPXI_MnBOY","title":"JSX"},
    ]
}

class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            urls:[],
            urlinkNewl:''
        }

        this.showMenu = this.showMenu.bind(this);
        this.delete = this.delete.bind(this);
    }

    showMenu(data) {  
        console.log("----------->data",data )
        this.setState({
            urlinkNewl:data
        })
    }

    delete(id){
        const items = myObj.url.filter(item => item.id !== id);
        console.log("items",items)
        console.log("urls",this.state.urls)
        this.setState({ urls: items });
     }

    

   render()
   {
    
    var urls = []



    myObj.url.map( (dataValue) => {
        console.log("dataValuedataValuedataValuedataValue===",dataValue.link)

        urls.push({'youtubelink':dataValue.link, 'id':dataValue.id , 'title':dataValue.title})
    })

    
  
    return(
    <div>

    <div className="macs-content">
        <div className="macs-content-body fade-in-up no-padder">
            <div className="bg-light lter b-b rema-cs-xs w-full pull-left">
                <ol className="breadcrumb bc-1 pull-left" style={{ marginBottom: 0 }}>
                    <li>GiveIndia </li>
                </ol>
            </div>

<Container>
    <Row>
        <Col sm={8}>
            <section>
                <div >
                { 
                    this.state.loading === true? 
                     <Spinner /> : 
                    <ReactPlayer url={this.state.urlinkNewl} playing />
                }
                </div>
            </section>
        </Col>
        <Col sm={4}>
            <div className="container">   
                <div className="center-col">
                    {
                        urls.map((result, index) => {
                            return ( 
                                <div class="col ml--2">
                                    <h4 class="mb-0">
                                        <div class="col-auto">                        
                                            <a style={{ cursor: 'pointer' }} onClick={ () => this.showMenu(result.youtubelink)}>
                                            { 
                                                this.state.loading ? 
                                                     <Spinner /> :
                                                <Card >
                                                    <Card.Body key={index}>
                                                    
                                                    <Card.Title onClick={this.delete.bind(this, result.id)} style={{ fontSize: 19,textAlign: 'center' }}> Tutor : <h1>{result.id} </h1> {result.youtubelink} : <p style={{ fontSize: 14,textAlign: 'center' }}>{result.title}</p>

                                                    </Card.Title>
                    
                                                    </Card.Body>

                                                    
                                                </Card>
                                                
                                                
                                            }
                                            </a>
                                      
                                        </div>
                                        
                                    </h4>
                                    <button onClick={this.delete.bind(this, result.id)}> Remove </button>
                                    <div>
                           
                        </div>
                                </div>)
                            })

                    
                    }    
                </div>
            </div>
        </Col>
    </Row>
</Container>
</div>
</div>

</div>)}
}

export default Homepage