import React, { useEffect, useState } from 'react'
import {Button, Form, Grid, Loader} from 'semantic-ui-react';

import {useParams, useNavigate, Navigate} from 'react-router-dom';

import {storage, db} from '../../firebase';
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import { addDoc, updateDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore';

import './uploadForm.css'
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const initialState = {
    title: "",
}

const UploadForm = () => {
    const [data, setData] = useState(initialState);
    const {title} = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [errors, setErrors] = useState({});

    const [error, setError] = useState(null)
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    useEffect(() => {
        id && getSingleUpload();
    }, [id])

    const getSingleUpload = async () => {
        const docRef = doc(db, 'uploads', id);
        const snapshot = await getDoc(docRef);
        if(snapshot.exists()) {
            setData({ ...snapshot.data() });
        }
    }

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', (snapshot) => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            }, (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                    setData((prev) => ({...prev, img: downloadURL}))
                })
            }
            
            )
        }
        file && uploadFile()
    }, [file])

    console.log(progress)


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }

    const validate = () => {
        let errors = {};
        if(!title) {
            errors.title = 'Title is required'
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = validate();
        if(Object.keys(errors).length)
        return setErrors(errors);

        setIsSubmit(true);
        if(!id){
            try {
                await addDoc(collection(db, "uploads"), {
                    ...data,
                    timestamp: serverTimestamp()
                })
            }catch (error){
                console.log(error)
            }
        }else{
            try {
                await updateDoc(doc(db, "uploads", id), {
                    ...data,
                    timestamp: serverTimestamp()
                })
            }catch (error){
                console.log(error)
            }
        }
        navigate('/');
    }

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)) {
            setFile(selected);
        }else{
            setFile(null);
            setError('Please select an image file (jpeg, jpg, png)');
        }
    }

  return (
    <div>
        <Grid
        centered
        verticalAlign='middle'
        columns='3'
        style={{height: '80vh'}}
        >
            <Grid.Row>
                <Grid.Column>
                    <div>
                        {isSubmit ? <Loader active inline='centered' size='huge'/> : (
                            <>
                            <h2 className='upload-update-section-title'>{id ? 'Update Picture' : 'Add new picture'}</h2>
                            <Form onSubmit={handleSubmit}>

                                <label className='title-input-label'>Write a title for your picture📸!</label>
                                <input 
                                className='title-input'
                                error={errors.title ? {content: errors.title} : null}
                                type='text' 
                                placeholder='Type a title that describes that moment 😉' 
                                name='title' 
                                onChange={handleChange} 
                                value={title}
                                autoFocus
                                />
                                <input 
                                className='upload-file-input'
                                id='uploadFileInput'
                                label='Upload' 
                                type='file'
                                onChange={changeHandler}
                                />

                                <div className='add-submit-form-section'>
                                    
                                
                                <label className='upload-input-label'>Upload a moment freezed in time🎈</label>

                                <span className='add-new-image' 
                                id='uploadFileInput'
                                onClick={() => document.querySelector('.upload-file-input').click()}
                                >+</span>
                                
                                <div className='output'>
                                    { error && <div className='error'>{error}</div> }
                                    { file && <div className='file-name'>{file.name}</div> }
                                    { file && <div  className='progress-bar' file={file} setFile={setFile} style={{width: progress + '%'}}></div> }
                                </div>

                                <Button 
                                primary
                                type='submit'
                                disabled={progress !== null && progress < 100 }
                                >
                                    Submit
                                </Button>
                                </div>
                            </Form>
                            </>
                        )}
                    </div>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    </div>
  )
}

export default UploadForm
