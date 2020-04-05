import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useHttp} from '../../../../../hooks/http.hook';
import {useMessage} from '../../../../../hooks/message.hook';
import EditLoad from '../../EditLoad/EditLoad';
import ShipperNav from '../../ShipperNav/ShipperNav';

import './load-item-full.css';

const NewLoadItemFull = props => {

  const history = useHistory();
  const storageName = 'userData';
  const storeData = JSON.parse(localStorage.getItem(storageName));
  const pathname = window.location.pathname;
  const {request, error, clearError} = useHttp();
  const message = useMessage();

  const [editForm, setEditForm] = useState(false);

  const [newLoad, setLoad] = useState({
    title: '',
    width: 0,
    length: 0,
    height: 0,
    payload: 0,
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);


  const postLoadItemHandler = async () => {

    await request(`${pathname}`, 'PATCH', null, {
      'Content-Type': 'application/json',
      'Authorization': storeData.token
    });

    console.log("Load was posted!");
    history.push('/loads/new-loads');

  };

  const deleteLoadItemHandler = async () => {

    await request(`${pathname}`, 'DELETE', null, {
      'Content-Type': 'application/json',
      'Authorization': storeData.token
    });
    console.log('Load was deleted');
    history.push('/loads/new-loads');

  };

  const editLoadItemHandler = () => {
    setEditForm(!editForm);
  };

  const onEditedLoad = (editedLoad) => {

    setLoad({
      ...newLoad,
      title: editedLoad.editedLoad.title,
      width: editedLoad.editedLoad.dimensions.width,
      length: editedLoad.editedLoad.dimensions.length,
      height: editedLoad.editedLoad.dimensions.height,
      payload: editedLoad.editedLoad.payload,
    });
    setEditForm(false);

  };


  useEffect(() => {
    async function fetchData() {
      try {
        const receiveLoad = await request(`${pathname}`, 'GET', null, {
          'Content-Type': 'application/json',
          'Authorization': storeData.token
        });

        setLoad({
          ...newLoad,
          title: receiveLoad.load.title,
          width: receiveLoad.load.dimensions.width,
          length: receiveLoad.load.dimensions.length,
          height: receiveLoad.load.dimensions.height,
          payload: receiveLoad.load.payload,
        });


      } catch(e) {
        console.log('Load was not received', e)
      }
    }
    fetchData();
  }, []);



  return (
    <div className="section__layout">
      <ShipperNav/>
      <h1 className="section__title">{newLoad.title}</h1>
      <div className="full-load__info">
        <div className="full-load__parameter">
          Width: {newLoad.width}
        </div>
        <div className="full-load__parameter">
          Length: {newLoad.length}
        </div>
        <div className="full-load__parameter">
          Height: {newLoad.height}
        </div>
        <div className="full-load__parameter">
          PayLoad: {newLoad.payload}
        </div>
        <button
          className="new-loads__item-button full-load__button"
          onClick={deleteLoadItemHandler}>Delete</button>
        <button
          className="new-loads__item-button full-load__button"
          onClick={editLoadItemHandler}>Edit</button>
        <button
          className="new-loads__item-button full-load__button"
          onClick={postLoadItemHandler}>Post</button>
      </div>
      { editForm ? <EditLoad onEditedLoad={onEditedLoad} {...newLoad}/> : ''}
    </div>
  );
};

export default NewLoadItemFull;
