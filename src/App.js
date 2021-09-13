import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'reactstrap';

export default function App(props){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Button color="danger" onClick={notify}>Notify!</Button>
      <ToastContainer />
    </div>
  );
}