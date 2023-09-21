import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      workloadMin: 0,
      workloadMax: 0,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Layout>
        <h1 className={styles.title}>
         <span>Szia</span>, jó hogy itt vagy.
        </h1>
        <h3 className={styles.description}>Néhány adatra szükségem <span>lesz :)</span></h3>
      <form onSubmit={formik.handleSubmit}>
      <TextField 
          id="name" 
          type="text"
          label="Ügyeletvezetői név" 
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.name}
       />
       <TextField
         id="email"
         type="email"
         label="Email" 
         variant="outlined"
         onChange={formik.handleChange}
         value={formik.values.email}
       />  
        <TextField
         id="workloadMin"
         type="number"
         label="Havonta min. blokkok száma" 
         variant="outlined"
         onChange={formik.handleChange}
         value={formik.values.workloadMin}
       />
        <TextField
         id="workloadMax"
         type="number"
         label="Havonta min. blokkok száma" 
         variant="outlined"
         onChange={formik.handleChange}
         value={formik.values.workloadMax}
       />
       <Button variant="contained" type="submit">Mentés</Button>
     </form>
    </Layout>
  );
}