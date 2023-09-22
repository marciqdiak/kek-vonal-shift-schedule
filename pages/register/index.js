import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';
import { useFormik } from 'formik';
import { TextField, Button, Grid } from '@mui/material';
import { useRouter } from 'next/router'


export default function Register() {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      workloadMin: 0,
      workloadMax: 0,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      router.push('/preference')
    },
  });
  return (
    <Layout>
        <h1 className={styles.title}>
         <span>Szia</span>, jó hogy itt vagy.
        </h1>
        <h3 className={styles.description}>Néhány adatra szükségem <span>lesz :)</span></h3>
      <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <TextField
        id="name"
        type="text"
        label="Ügyeletvezetői név"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.name}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="email"
        type="email"
        label="Email"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.email}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="workloadMin"
        type="number"
        label="Havonta min. blokkok száma"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.workloadMin}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="workloadMax"
        type="number"
        label="Havonta max. blokkok száma"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.workloadMax}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} style={{ textAlign: 'center' }} >
      <Button variant="contained" type="submit" >
        Mentés
      </Button>
    </Grid>
  </Grid>
     </form>
    </Layout>
  );
}