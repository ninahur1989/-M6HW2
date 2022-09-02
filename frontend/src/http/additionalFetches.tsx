import React, { useState, useEffect } from 'react';
import { config } from "../Urlgetter";

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import { getRoles } from '@testing-library/react';

interface Song {
    Id: number;
    Name: string;
    Author: string;
    RealezeDate: Date;
    Duration: string;
    IsFavorite: boolean;
  }

 async function GetAll() : Promise<Song[]> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'morpheus', job: 'leader' })
    };
    const response =  await fetch(`${config.reqresUrl}/Getall`);
    console.log(response)
    return await response.json();
  }
  
    async function Create(this: any) : Promise<String>{
    const requestOptions = {
      method: 'POST',
    };
    const response = await fetch(`${config.reqresUrl}/Create`);
    console.log(response)
    return await response.json();
  }
  
   async function Update(this: any) : Promise<Song>{
    const requestOptions = {
      method: 'Update',
    };
    const response = await fetch(`${config.reqresUrl}/Update`);
    console.log(response)
    return await response.json();
  }
  
   async function Delete(this: any) : Promise<String>{
    const requestOptions = {
      method: 'Delete'
    };
    const response = await fetch(`${config.reqresUrl}/Delete`);
    return await response.json();
  }
  export function Realeze(){

    return (
      <div>
        <div>
          <button onClick={GetAll }>
          GetAll
          </button>
        </div>
        <button onClick={Create}>
          Post
        </button>
        <div>
        <button onClick={Update }>
        Update
        </button>

        </div>
        <div>
        <button onClick={Delete}>
        Delete
        </button>
          
        </div>
    
      </div>
    )

  }
  export default Realeze;
  