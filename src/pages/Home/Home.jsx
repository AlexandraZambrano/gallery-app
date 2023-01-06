import React, {useEffect, useState} from 'react';
import {db} from '../../firebase';
import { Grid, Container } from 'semantic-ui-react';
import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore';
import ModalComponent from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import './home.css'

const Home = () => {
    const [uploads, setUploads] = useState([]);
    const [open, setOpen] = useState(false);
    const [upload, setUpload] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(collection(db, 'uploads'), (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({id: doc.id, ...doc.data()})
            });
            setUploads(list);
            setLoading(false)
        }, (error) => {
            console.log(error)
        });
        return () => {
            unsub()
        }
    }, []);

    if(loading) {
        return <Spinner />
    }

    const handleModal = (item) => {
        setOpen(true);
        setUpload(item);
    }

    const handleDelete = async (id) => {
        if(window.confirm('Are you sure to delete that picture?')) {
            try{
                setOpen(false);
                await deleteDoc(doc(db, 'uploads', id));
                setUploads(uploads.filter((upload) => upload.id !== id))
            }catch(err){
                console.log(err)
            }
        }
    }

  return (
    <Container>
            <div className='feed'>
                {uploads && uploads.map((item) => (
                    <Grid.Column key={item.id}>
                        <div>
                           <div className='image-content' onClick={() => handleModal(item)}>
                            <div className='picture-layer'>
                                <img className='feed-images' src={item.img} alt={item.title} style={{width:'300px'}} />
                            </div>
                            </div>
                            <div className='open-modal'>
                                {open && (
                                    <ModalComponent 
                                    open={open} 
                                    setOpen={setOpen}
                                    handleDelete={handleDelete}
                                    {...upload}
                                    />
                                )}
                            </div>
                        </div>
                    </Grid.Column>
                ))}
            </div>
    </Container>
  )
}

export default Home
