import { Button,Badge, ButtonGroup } from '@mui/material';

import React from 'react';
import Navbar from '../../Layout/frontend/Navbar';

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Home=()=> {

    const [itemCount, setItemCount] = useState(1);
    const [show, setShow] = useState(true);
    return (
        <div>
            <Navbar/>
            <div className="navbar-expand-lg bg-black">
        <div className="container-fuild header">
          {/* <div
            className="collapse navbar-collapse header-list"
            id="navbarResponsive"
          >
            <a className="nav-link" href="#!">
              {" "}
              Home
            </a>
            <a className="nav-link" href="#!">
              About
            </a>
            <a className="nav-link" href="#!">
              Shop
            </a>
            <a className="nav-link" href="#!">
              Contact
            </a>

            <button className="btn offset-9 bg-light">
              <Badge badgeContent={itemCount - 1} color="primary">
                <ShoppingCartIcon />
                Cart
              </Badge>
            </button>
          </div> */}
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center mt-2 bg-black center">
        <h2>Shop in style</h2>
      </div>

      <div className="container row m-5">
        <div className="col  m-4">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80"
                alt="" />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons">
                {/* < button className='btns bg-light m-2'  onClick={() => {
          setItemCount(itemCount + 1);
        }}><RemoveIcon/>Add to Cart<AddIcon/></button> */}

                {show ? (
                  <button
                    className="btns bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    {/* <Badge badgeContent={itemCount - 1} color="primary"> */}
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                    {/* </Badge> */}
                  </ButtonGroup>
                )}

                {/* <ButtonGroup>
      <Button
        onClick={() => {
          setItemCount(Math.max(itemCount - 1, 0));
        }}
      >
        {" "}
        <RemoveIcon fontSize="small" />
      </Button>
      <Button
        onClick={() => {
          setItemCount(itemCount + 1);
        }}
      >
        {" "}
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col m-4">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBo2thEGVgOUn-3PTOHrPuAp_FJzf-fgMXdAGkLMZXtAAodFhPHcuMKHAYjj5zPbtK3w&usqp=CAU"
                alt="" />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons1">
                {/* < button className='btns bg-light m-2'>Add to Cart</button> */}
                {show ? (
                  <button
                    className="btns1 bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns1 bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    <Button
                      className="btns1 bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col m-4">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..." />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons">
                {/* < button className='btns bg-light m-2'>Add to Cart</button> */}

                {show ? (
                  <button
                    className="btns bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col m-4">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..." />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons">
                {/* < button onClick={() => {
                  setShow(!show);
                }} className='btns bg-light m-2'
                >Add to Cart</button> */}


                {show ? (
                  <button
                    className="btns bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container row m-5">
        <div className="col m-4">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..." />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons">
                {/* < button className='btns bg-light m-2'>Add to Cart</button> */}

                {show ? (
                  <button
                    className="btns bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col m-4">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..." />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons">
                {/* < button className='btns bg-light m-2'>Add to Cart</button> */}

                {show ? (
                  <button
                    className="btns bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col m-4">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..." />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons">
                {/* < button className='btns bg-light m-2'>Add to Cart</button> */}

                {show ? (
                  <button
                    className="btns bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 col">
          <div className="card upper">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..." />
            </a>
          </div>
          <div className="lower card-body">
            <div className=" card-body tags">
              <h4 className="card-title">Special items</h4>
              <h5>$18.00</h5>
              <div className="card-footer">
                <small class="text-muted">★ ★ ★ ★ ☆</small>
              </div>
              <div className="buttons">
                {/* < button className='btns bg-light m-2'>Add to Cart</button> */}

                {show ? (
                  <button
                    className="btns bg-light m-2"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Add Cart
                  </button>
                ) : (
                  <ButtonGroup>
                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>

                    <Button
                      className="btns bg-dark m-2"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Home;