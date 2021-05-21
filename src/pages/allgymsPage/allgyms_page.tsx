import React from "react";
import './allygyms_page.css';
import { Navbar, Nav } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { createStyles, makeStyles, useTheme, Theme  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarIcon from '@material-ui/icons/Star';
import MultipleSelect from "../../components/materialuiComponents/multipleSelect/multipleselect";
import SimpleSelect from "../../components/materialuiComponents/sortBy/sortby";


export default function AllGymsPage() {

    const useStyles1 = makeStyles({
        root: {
            maxWidth: 400,
        },
    });

    function valuetext(value: number) {
        return `${value}°C`;
    }

    const classes = useStyles1();
    const [value, setValue] = React.useState<number[]>([0, 37]);

    const handleChange1 = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };



    return (
        <div className="div">
            <Navbar id='nav1' sticky="top" className='my-5 px-5 d-flex' bg="transparent" variant='dark' expand="lg">
                <Navbar.Brand href="#home" className='d-none d-sm-none d-md-block'>Gang-ga</Navbar.Brand>
                <div className="d-flex w-75">

                    <input className="form-control px-md-3 py-2 rounded-pill w-100 bg-transparent text-light " type="text" placeholder="Search for the best GYM near you" aria-label="Search" />
                    <Button className='rounded-pill ' variant='contained'>
                        Go
                        </Button>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link2">Login</Nav.Link>
                        <Nav.Link href="#link22">Signup</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 p-3 m-lg-3 text-start" id='filterbox'>
                        <div className={classes.root}>
                            <Typography id="range-slider" gutterBottom>
                                Price Range
                             </Typography>
                            <Slider
                                value={value}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 p-3 m-lg-3 text-start" id='filterbox'>
                    <MultipleSelect/>
                    </div>
                    <div className="col-md-3 p-3 m-lg-3 text-start" id='filterbox'>
                        <SimpleSelect/>
                    </div>
                 
                </div>
                <div className="container d-flex justify-content-center ">
                    <div className="row d-flex  p-3 justify-content-center">
                        <div className="col-12 ">
                            <div className="card mt-4 mx-auto  rounded-0" style={{maxWidth: "1000px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-4">
                                        <img className='img-fluid' src='https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body text-start">
                                        <h4 className="card-title"><strong>Card title</strong></h4>
                                        <h6 className="text-muted">Random subtitle whi9ch includes the address</h6>
                                        <br/>
                                        <span className="badge bg-success py-auto"><h6 className='py-auto my-auto'>4.5<StarIcon fontSize='small'/> </h6> </span>
                                        <br/><br/>
                                        <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes
                                        <br/><br/>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    
                                        <p className='text-danger h3 strong'>$32189</p>
                                        <br/>
                                        <Button variant="outlined" className='m-2' style={{color:'#fff',border:'1px solid #fff'}}>
                                            VIEW DETAILS
                                        </Button>
                                        <Button variant="contained" className='m-2' color="primary">
                                            BOOK NOW
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="card mt-4 mx-auto rounded-0" style={{maxWidth: "1000px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-4">
                                        <img className='img-fluid' src='https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body text-start">
                                        <h4 className="card-title"><strong>Card title</strong></h4>
                                        <h6 className="text-muted">Random subtitle whi9ch includes the address</h6>
                                        <br/>
                                        <span className="badge bg-success py-auto"><h6 className='py-auto my-auto'>4.5<StarIcon fontSize='small'/> </h6> </span>
                                        <br/><br/>
                                        <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes
                                        <br/><br/>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    
                                        <p className='text-danger h3 strong'>$32189</p>
                                        <br/>
                                        <Button variant="outlined" className='m-2' style={{color:'#fff',border:'1px solid #fff'}}>
                                            VIEW DETAILS
                                        </Button>
                                        <Button variant="contained" className='m-2' color="primary">
                                            BOOK NOW
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="card mt-4 mx-auto rounded-0" style={{maxWidth: "1000px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-4">
                                        <img className='img-fluid' src='https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body text-start">
                                        <h4 className="card-title"><strong>Card title</strong></h4>
                                        <h6 className="text-muted">Random subtitle whi9ch includes the address</h6>
                                        <br/>
                                        <span className="badge bg-success py-auto"><h6 className='py-auto my-auto'>4.5<StarIcon fontSize='small'/> </h6> </span>
                                        <br/><br/>
                                        <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes
                                        <br/><br/>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    
                                        <p className='text-danger h3 strong'>$32189</p>
                                        <br/>
                                        <Button variant="outlined" className='m-2' style={{color:'#fff',border:'1px solid #fff'}}>
                                            VIEW DETAILS
                                        </Button>
                                        <Button variant="contained" className='m-2' color="primary">
                                            BOOK NOW
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="card mt-4 mx-auto rounded-0" style={{maxWidth: "1000px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-4">
                                        <img className='img-fluid' src='https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body text-start">
                                        <h4 className="card-title"><strong>Card title</strong></h4>
                                        <h6 className="text-muted">Random subtitle whi9ch includes the address</h6>
                                        <br/>
                                        <span className="badge bg-success py-auto"><h6 className='py-auto my-auto'>4.5<StarIcon fontSize='small'/> </h6> </span>
                                        <br/><br/>
                                        <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes
                                        <br/><br/>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    
                                        <p className='text-danger h3 strong'>$32189</p>
                                        <br/>
                                        <Button variant="outlined" className='m-2' style={{color:'#fff',border:'1px solid #fff'}}>
                                            VIEW DETAILS
                                        </Button>
                                        <Button variant="contained" className='m-2' color="primary">
                                            BOOK NOW
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="card mt-4 mx-auto rounded-0" style={{maxWidth: "1000px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-4">
                                        <img className='img-fluid' src='https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body text-start">
                                        <h4 className="card-title"><strong>Card title</strong></h4>
                                        <h6 className="text-muted">Random subtitle whi9ch includes the address</h6>
                                        <br/>
                                        <span className="badge bg-success py-auto"><h6 className='py-auto my-auto'>4.5<StarIcon fontSize='small'/> </h6> </span>
                                        <br/><br/>
                                        <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes <CheckCircleOutlineIcon fontSize="small"/>XYZ yes
                                        <br/><br/>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    
                                        <p className='text-danger h3 strong'>$32189</p>
                                        <br/>
                                        <Button variant="outlined" className='m-2' style={{color:'#fff',border:'1px solid #fff'}}>
                                            VIEW DETAILS
                                        </Button>
                                        <Button variant="contained" className='m-2' color="primary">
                                            BOOK NOW
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
           


                    </div>
                </div>
            </div>
        </div>




    )
}